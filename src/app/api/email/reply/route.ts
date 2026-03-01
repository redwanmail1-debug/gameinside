// POST /api/email/reply
// Stuur notificatie wanneer iemand reageert op een reactie.
// Haalt ontvanger-email op via admin (service role).

import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { sendReplyNotification } from '@/lib/email';

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export async function POST(req: NextRequest) {
  try {
    const { parentCommentId, replyContent, senderUserId, articleSlug } = await req.json();

    if (!parentCommentId || !replyContent || !senderUserId || !articleSlug) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken.' }, { status: 400 });
    }

    // Haal ouderreactie op (inclusief auteur)
    const { data: parent } = await supabaseAdmin
      .from('comments')
      .select('user_id, content')
      .eq('id', parentCommentId)
      .single();

    if (!parent) {
      return NextResponse.json({ error: 'Ouderreactie niet gevonden.' }, { status: 404 });
    }

    // Stuur geen mail als iemand op zichzelf reageert
    if (parent.user_id === senderUserId) {
      return NextResponse.json({ success: true, skipped: 'self-reply' });
    }

    // Haal e-mail van ontvanger op via admin
    const { data: recipientUser } = await supabaseAdmin.auth.admin.getUserById(parent.user_id);
    if (!recipientUser?.user?.email) {
      return NextResponse.json({ error: 'Ontvanger niet gevonden.' }, { status: 404 });
    }

    // Haal profielnamen op
    const { data: recipientProfile } = await supabaseAdmin
      .from('profiles')
      .select('username')
      .eq('id', parent.user_id)
      .single();

    const { data: senderProfile } = await supabaseAdmin
      .from('profiles')
      .select('username')
      .eq('id', senderUserId)
      .single();

    await sendReplyNotification({
      toEmail: recipientUser.user.email,
      recipientUsername: recipientProfile?.username ?? 'Gebruiker',
      senderUsername: senderProfile?.username ?? 'Iemand',
      originalComment: parent.content,
      replyContent,
      articleSlug,
      articleTitle: slugToTitle(articleSlug),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[email/reply]', err);
    return NextResponse.json({ error: 'E-mail verzenden mislukt.' }, { status: 500 });
  }
}
