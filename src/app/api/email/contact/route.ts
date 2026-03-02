// POST /api/email/contact
// Stuurt een contactformulier-inzending door naar redactie@gameinside.nl

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { naam, email, onderwerp, bericht } = await req.json();

    if (!naam || !email || !onderwerp || !bericht) {
      return NextResponse.json({ error: 'Alle velden zijn verplicht.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Gameinside <noreply@gameinside.nl>',
      to: 'redactie@gameinside.nl',
      replyTo: email,
      subject: `[Contact] ${onderwerp}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0d1117; color: #e6edf3; padding: 32px; border-radius: 12px; border: 1px solid #30363d;">
          <h2 style="color: #00aaff; margin-top: 0;">Nieuw contactbericht</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #8b949e; width: 120px;">Naam</td>
              <td style="padding: 8px 0; color: #e6edf3;">${naam}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e;">E-mail</td>
              <td style="padding: 8px 0; color: #e6edf3;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e;">Onderwerp</td>
              <td style="padding: 8px 0; color: #e6edf3;">${onderwerp}</td>
            </tr>
          </table>
          <div style="background: #161b22; border-radius: 8px; padding: 16px; border: 1px solid #30363d;">
            <p style="color: #8b949e; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Bericht</p>
            <p style="margin: 0; color: #e6edf3; white-space: pre-wrap;">${bericht}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[email/contact]', err);
    return NextResponse.json({ error: 'E-mail verzenden mislukt.' }, { status: 500 });
  }
}
