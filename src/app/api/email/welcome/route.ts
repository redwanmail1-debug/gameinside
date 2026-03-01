// POST /api/email/welcome
// Stuur welkomstmail na eerste inlog (na e-mailbevestiging).

import { NextRequest, NextResponse } from 'next/server';
import { sendWelcomeEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const { email, username } = await req.json();

    if (!email || !username) {
      return NextResponse.json({ error: 'email en username zijn verplicht.' }, { status: 400 });
    }

    await sendWelcomeEmail(email, username);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[email/welcome]', err);
    return NextResponse.json({ error: 'E-mail verzenden mislukt.' }, { status: 500 });
  }
}
