// POST /api/email/like
// Controleert na een like of een mijlpaal (5, 10, 25) bereikt is.
// Stuurt notificatie naar auteur van de gelikte reactie.

import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { sendLikeNotification } from '@/lib/email';

const MILESTONES = [5, 10, 25];

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export async function POST(req: NextRequest) {
  try {
    const { commentId, likerUserId } = await req.json();

    if (!commentId) {
      return NextResponse.json({ error: 'commentId is verplicht.' }, { status: 400 });
    }

    // Haal reactie op met actuele like-count
    const { data: comment } = await supabaseAdmin
      .from('comments')
      .select('user_id, content, likes, article_slug')
      .eq('id', commentId)
      .single();

    if (!comment) {
      return NextResponse.json({ error: 'Reactie niet gevonden.' }, { status: 404 });
    }

    // Geen mijlpaal bereikt → niets te doen
    if (!MILESTONES.includes(comment.likes)) {
      return NextResponse.json({ success: true, skipped: 'no-milestone' });
    }

    // Stuur geen mail als iemand zijn eigen reactie liket
    if (comment.user_id === likerUserId) {
      return NextResponse.json({ success: true, skipped: 'self-like' });
    }

    // Haal e-mail van auteur op
    const { data: authorUser } = await supabaseAdmin.auth.admin.getUserById(comment.user_id);
    if (!authorUser?.user?.email) {
      return NextResponse.json({ error: 'Auteur niet gevonden.' }, { status: 404 });
    }

    // Haal profielnaam op
    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('username')
      .eq('id', comment.user_id)
      .single();

    await sendLikeNotification({
      toEmail: authorUser.user.email,
      username: profile?.username ?? 'Gebruiker',
      commentContent: comment.content,
      likeCount: comment.likes,
      articleSlug: comment.article_slug,
      articleTitle: slugToTitle(comment.article_slug),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[email/like]', err);
    return NextResponse.json({ error: 'E-mail verzenden mislukt.' }, { status: 500 });
  }
}
