// POST /api/email/reset
// Genereert wachtwoord-reset link via admin en stuurt onze eigen e-mail.

import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { sendPasswordResetEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'E-mailadres is verplicht.' }, { status: 400 });
    }

    // Genereer reset-link (geen automatische Supabase-mail)
    const { data, error } = await supabaseAdmin.auth.admin.generateLink({
      type: 'recovery',
      email,
      options: {
        redirectTo: 'https://gameinside.nl/reset-password',
      },
    });

    if (error) {
      // Stuur altijd een succesmelding terug (security: geen user enumeration)
      console.error('[email/reset] generateLink fout:', error.message);
      return NextResponse.json({ success: true });
    }

    const resetUrl = data?.properties?.action_link;
    if (!resetUrl) {
      return NextResponse.json({ success: true });
    }

    // Haal profielnaam op (optioneel – voor personalisatie)
    const { data: userData } = await supabaseAdmin.auth.admin.getUserById(
      data.user?.id ?? '',
    );
    const userId = userData?.user?.id;
    let username = '';
    if (userId) {
      const { data: profile } = await supabaseAdmin
        .from('profiles')
        .select('username')
        .eq('id', userId)
        .single();
      username = profile?.username ?? '';
    }

    await sendPasswordResetEmail(email, username, resetUrl);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[email/reset]', err);
    // Altijd success terug voor security
    return NextResponse.json({ success: true });
  }
}
