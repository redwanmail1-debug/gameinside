const nodemailer = require('nodemailer');

const TO = 'redactie@gameinside.nl';

function createTransport() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

function hasCredentials() {
  return !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
}

async function sendSuccess(articles, usedFeeds) {
  if (!hasCredentials()) {
    console.log('📧 Email overgeslagen (geen credentials gevonden)');
    return;
  }

  const articleList = articles
    .map((a, i) => `${i + 1}. ${a.title.replace('[CONCEPT] ', '')} - ${a.category}`)
    .join('\n');

  const feedList = usedFeeds.slice(0, 5).join(', ');

  const body = `Goedemorgen! Je dagelijkse concepten staan klaar.

Ga naar gameinside.sanity.studio om te reviewen.

Vandaag's concepten:
${articleList}

Bronnen gebruikt: ${feedList}
API kosten vandaag: ~€0.05

Fijne dag!`;

  const transporter = createTransport();
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: TO,
    subject: '📝 Gameinside - 5 concepten klaar voor review',
    text: body,
  });

  console.log(`📧 Email verzonden naar ${TO}`);
}

async function sendFailure(errorTitle, errorDetails) {
  if (!hasCredentials()) {
    console.error(`📧 Email overgeslagen (geen credentials). Fout: ${errorTitle}`);
    return;
  }

  const body = `De Gameinside news agent is mislukt.

Fout: ${errorTitle}

Details:
${errorDetails}

Controleer de GitHub Actions logs voor meer informatie.
Tijd: ${new Date().toISOString()}`;

  try {
    const transporter = createTransport();
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: TO,
      subject: '🚨 Gameinside agent mislukt',
      text: body,
    });
    console.log(`📧 Fout-email verzonden naar ${TO}`);
  } catch (mailErr) {
    console.error('📧 Kon ook geen fout-email sturen:', mailErr.message);
  }
}

module.exports = { sendSuccess, sendFailure };
