// Email 4: Stuur bij like-mijlpalen (5, 10, 25 likes)

interface Props {
  username: string;
  commentContent: string;
  likeCount: number;
  articleTitle: string;
  articleUrl: string;
}

export function LikeNotificationEmail({
  username,
  commentContent,
  likeCount,
  articleTitle,
  articleUrl,
}: Props): string {
  const year = new Date().getFullYear();
  const clip = (text: string, max = 200) =>
    text.length > max ? text.slice(0, max).trimEnd() + '…' : text;

  const milestone =
    likeCount >= 25 ? { emoji: '&#128081;', label: 'Ongelooflijk!' } :
    likeCount >= 10 ? { emoji: '&#128293;', label: 'Geweldig!' } :
                     { emoji: '&#11088;', label: 'Goed bezig!' };

  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Je reactie heeft ${likeCount} likes gekregen!</title>
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

            <div style="text-align:center;margin-bottom:20px;">
              <span style="font-size:52px;line-height:1;">${milestone.emoji}</span>
            </div>

            <h1 style="color:#e6edf3;font-size:22px;font-weight:700;margin:0 0 8px 0;text-align:center;">
              ${milestone.label} ${username}
            </h1>
            <p style="color:#8b949e;font-size:15px;line-height:1.7;margin:0 0 28px 0;text-align:center;">
              Jouw reactie op <strong style="color:#00aaff;">${articleTitle}</strong><br/>
              heeft <strong style="color:#e6edf3;">${likeCount} likes</strong> gekregen! &#128077;
            </p>

            <!-- Like counter badge -->
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 28px auto;">
              <tr>
                <td style="background-color:#00aaff;border-radius:50px;padding:10px 28px;text-align:center;">
                  <span style="color:#ffffff;font-size:22px;font-weight:900;">&#128077; ${likeCount} likes</span>
                </td>
              </tr>
            </table>

            <!-- Comment preview -->
            <p style="color:#555e6b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 8px 0;">
              Jouw reactie
            </p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="background-color:#0d1117;border:1px solid #30363d;border-left:3px solid #00aaff;border-radius:4px;padding:14px 16px;">
                  <p style="color:#e6edf3;font-size:14px;line-height:1.6;margin:0;">
                    ${clip(commentContent)}
                  </p>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 32px auto;">
              <tr>
                <td style="background-color:#00aaff;border-radius:8px;">
                  <a href="${articleUrl}"
                     style="display:inline-block;padding:14px 40px;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;border-radius:8px;">
                    &#128172;&nbsp;&nbsp;Bekijk het artikel
                  </a>
                </td>
              </tr>
            </table>

            <hr style="border:none;border-top:1px solid #30363d;margin:0 0 24px 0;"/>
            <p style="color:#555e6b;font-size:12px;line-height:1.6;margin:0;text-align:center;">
              Je ontvangt dit bericht omdat jouw reactie een like-mijlpaal heeft bereikt op Gameinside.
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
