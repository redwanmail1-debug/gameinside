// Email 2: Stuur nadat e-mail bevestigd is

interface Props {
  username: string;
}

export function WelcomeEmail({ username }: Props): string {
  const year = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Welkom bij de Gameinside community!</title>
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

            <div style="text-align:center;margin-bottom:24px;">
              <span style="font-size:56px;line-height:1;">&#127918;</span>
            </div>

            <h1 style="color:#e6edf3;font-size:24px;font-weight:700;margin:0 0 8px 0;text-align:center;">
              Welkom bij Gameinside, ${username}!
            </h1>
            <p style="color:#00aaff;font-size:14px;font-weight:600;text-align:center;margin:0 0 24px 0;">
              &#127881;&nbsp; Je account is actief en klaar voor gebruik
            </p>

            <p style="color:#8b949e;font-size:15px;line-height:1.7;margin:0 0 8px 0;">
              Je bent nu officieel lid van de <strong style="color:#e6edf3;">Gameinside community</strong>.
              Praat mee over het laatste gaming nieuws, reviews en alles wat speelt in de gamewereld.
            </p>
            <p style="color:#8b949e;font-size:15px;line-height:1.7;margin:0 0 32px 0;">
              Hier is wat je nu kunt doen:
            </p>

            <!-- Feature table -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                   style="background-color:#0d1117;border:1px solid #30363d;border-radius:8px;margin-bottom:32px;">
              <tr>
                <td style="padding:14px 20px;border-bottom:1px solid #30363d;">
                  <span style="color:#00aaff;font-size:16px;">&#10003;</span>&nbsp;&nbsp;
                  <span style="color:#e6edf3;font-size:14px;font-weight:600;">Reageer op artikelen</span>&nbsp;
                  <span style="color:#8b949e;font-size:13px;">&#8212; deel jouw mening</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;border-bottom:1px solid #30363d;">
                  <span style="color:#00aaff;font-size:16px;">&#10003;</span>&nbsp;&nbsp;
                  <span style="color:#e6edf3;font-size:14px;font-weight:600;">Like de beste reacties</span>&nbsp;
                  <span style="color:#8b949e;font-size:13px;">&#8212; steun goede bijdragen</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;border-bottom:1px solid #30363d;">
                  <span style="color:#00aaff;font-size:16px;">&#10003;</span>&nbsp;&nbsp;
                  <span style="color:#e6edf3;font-size:14px;font-weight:600;">Reageer op andere spelers</span>&nbsp;
                  <span style="color:#8b949e;font-size:13px;">&#8212; start een gesprek</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;">
                  <span style="color:#00aaff;font-size:16px;">&#10003;</span>&nbsp;&nbsp;
                  <span style="color:#e6edf3;font-size:14px;font-weight:600;">Ontvang notificaties</span>&nbsp;
                  <span style="color:#8b949e;font-size:13px;">&#8212; blijf op de hoogte</span>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 32px auto;">
              <tr>
                <td style="background-color:#00aaff;border-radius:8px;">
                  <a href="https://gameinside.nl"
                     style="display:inline-block;padding:14px 40px;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;border-radius:8px;">
                    &#128379;&#65039;&nbsp;&nbsp;Naar Gameinside
                  </a>
                </td>
              </tr>
            </table>

            <hr style="border:none;border-top:1px solid #30363d;margin:0 0 24px 0;"/>
            <p style="color:#555e6b;font-size:12px;line-height:1.6;margin:0;text-align:center;">
              Game on! &#128640;
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
