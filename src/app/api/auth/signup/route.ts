// POST /api/auth/signup
// Maakt account aan via admin (geen automatische Supabase-email),
// stuurt onze eigen verificatie-email via Resend.

import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { sendVerificationEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const { email, password, username } = await req.json();

    // Validatie
    if (!email || !password || !username) {
      return NextResponse.json({ error: 'Vul alle velden in.' }, { status: 400 });
    }
    if (!/^[a-zA-Z0-9]{3,20}$/.test(username)) {
      return NextResponse.json(
        { error: 'Gebruikersnaam: 3–20 tekens, alleen letters en cijfers.' },
        { status: 400 },
      );
    }
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Wachtwoord moet minimaal 8 tekens zijn.' },
        { status: 400 },
      );
    }

    // Genereer verificatielink zonder automatische e-mail
    const { data, error } = await supabaseAdmin.auth.admin.generateLink({
      type: 'signup',
      email,
      password,
      options: {
        data: { username },
        redirectTo: 'https://gameinside.nl',
      },
    });

    if (error) {
      // Gebruiker bestaat al
      if (error.message?.includes('already registered')) {
        return NextResponse.json(
          { error: 'Dit e-mailadres is al in gebruik.' },
          { status: 409 },
        );
      }
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const user = data.user;
    const confirmUrl = data.properties?.action_link;

    if (!user || !confirmUrl) {
      return NextResponse.json(
        { error: 'Account aanmaken mislukt. Probeer het opnieuw.' },
        { status: 500 },
      );
    }

    // Maak profiel aan
    await supabaseAdmin.from('profiles').upsert({
      id: user.id,
      username,
      avatar_url: null,
      comment_count: 0,
    });

    // Stuur onze verificatie-email via Resend
    await sendVerificationEmail(email, username, confirmUrl);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[signup]', err);
    return NextResponse.json(
      { error: 'Er ging iets mis. Probeer het opnieuw.' },
      { status: 500 },
    );
  }
}
