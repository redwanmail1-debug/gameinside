// POST /api/email/adverteren
// Stuurt een advertentieaanvraag door naar redactie@gameinside.nl

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { bedrijfsnaam, contactpersoon, email, telefoon, samenwerking, budget, toelichting } = await req.json();

    if (!bedrijfsnaam || !contactpersoon || !email || !samenwerking || !budget) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Gameinside <noreply@gameinside.nl>',
      to: 'redactie@gameinside.nl',
      replyTo: email,
      subject: `[Adverteren] ${bedrijfsnaam} — ${samenwerking}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0d1117; color: #e6edf3; padding: 32px; border-radius: 12px; border: 1px solid #30363d;">
          <h2 style="color: #00aaff; margin-top: 0;">Nieuwe advertentieaanvraag</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #8b949e; width: 140px;">Bedrijfsnaam</td>
              <td style="padding: 8px 0; color: #e6edf3;">${bedrijfsnaam}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e;">Contactpersoon</td>
              <td style="padding: 8px 0; color: #e6edf3;">${contactpersoon}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e;">E-mail</td>
              <td style="padding: 8px 0; color: #e6edf3;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e;">Telefoon</td>
              <td style="padding: 8px 0; color: #e6edf3;">${telefoon || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e;">Samenwerking</td>
              <td style="padding: 8px 0; color: #e6edf3;">${samenwerking}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e;">Budget</td>
              <td style="padding: 8px 0; color: #e6edf3;">${budget}</td>
            </tr>
          </table>
          ${toelichting ? `
          <div style="background: #161b22; border-radius: 8px; padding: 16px; border: 1px solid #30363d;">
            <p style="color: #8b949e; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Toelichting</p>
            <p style="margin: 0; color: #e6edf3; white-space: pre-wrap;">${toelichting}</p>
          </div>
          ` : ''}
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[email/adverteren]', err);
    return NextResponse.json({ error: 'E-mail verzenden mislukt.' }, { status: 500 });
  }
}
