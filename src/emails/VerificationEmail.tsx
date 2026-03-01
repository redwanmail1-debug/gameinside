// Email 1: Stuur na registratie – bevat verificatielink van Supabase

interface Props {
  username: string;
  confirmUrl: string;
}

export function VerificationEmail({ username, confirmUrl }: Props): string {
  const year = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Bevestig je Gameinside account</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;padding:40px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

        <!-- Header -->
        <tr>
          <td style="background-color:#00aaff;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
            <span style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:1px;">GAME</span><span style="font-size:28px;font-weight:900;color:#0d1117;letter-spacing:1px;">INSIDE</span>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background-color:#161b22;border:1px solid #30363d;border-top:none;padding:40px 32px;border-radius:0 0 12px 12px;">
            <h1 style="color:#e6edf3;font-size:22px;font-weight:700;margin:0 0 16px 0;">
              Bevestig je account, ${username}! &#127918;
            </h1>
            <p style="color:#8b949e;font-size:15px;line-height:1.7;margin:0 0 8px 0;">
              Bedankt voor je registratie bij Gameinside.
            </p>
            <p style="color:#8b949e;font-size:15px;line-height:1.7;margin:0 0 32px 0;">
              Klik op de knop hieronder om je e-mailadres te bevestigen en direct mee te praten in de gaming community.
            </p>

            <!-- CTA button -->
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 32px auto;">
              <tr>
                <td style="background-color:#00aaff;border-radius:8px;">
                  <a href="${confirmUrl}"
                     style="display:inline-block;padding:14px 40px;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;border-radius:8px;">
                    &#9993;&#65039;&nbsp;&nbsp;Bevestig mijn account
                  </a>
                </td>
              </tr>
            </table>

            <p style="color:#555e6b;font-size:13px;line-height:1.6;margin:0 0 6px 0;">
              Of kopieer en plak deze link in je browser:
            </p>
            <p style="color:#00aaff;font-size:12px;word-break:break-all;margin:0 0 32px 0;">
              ${confirmUrl}
            </p>

            <p style="color:#555e6b;font-size:13px;line-height:1.6;margin:0 0 24px 0;padding:16px;background-color:#0d1117;border-radius:8px;border:1px solid #30363d;">
              &#128274;&nbsp; Deze link is 24 uur geldig. Na die tijd moet je opnieuw een verificatiemail aanvragen.
            </p>

            <hr style="border:none;border-top:1px solid #30363d;margin:0 0 24px 0;"/>
            <p style="color:#555e6b;font-size:12px;line-height:1.6;margin:0;text-align:center;">
              Je ontvangt dit bericht omdat iemand zich heeft aangemeld bij Gameinside met dit e-mailadres.<br/>
              Als je dit niet was, kun je deze e-mail veilig negeren.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px;text-align:center;">
            <p style="color:#555e6b;font-size:12px;margin:0;">
              &copy; ${year} Gameinside &middot;
              <a href="https://gameinside.nl" style="color:#00aaff;text-decoration:none;">gameinside.nl</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
