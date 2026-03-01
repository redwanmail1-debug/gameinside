// Centrale email-verzendlaag via Resend
// Alleen gebruiken in API routes (server-side)

import { Resend } from 'resend';
import { VerificationEmail } from '@/emails/VerificationEmail';
import { WelcomeEmail } from '@/emails/WelcomeEmail';
import { ReplyNotificationEmail } from '@/emails/ReplyNotificationEmail';
import { LikeNotificationEmail } from '@/emails/LikeNotificationEmail';
import { PasswordResetEmail } from '@/emails/PasswordResetEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'Gameinside <noreply@gameinside.nl>';

// ── 1. Verificatie-email ────────────────────────────────────────────────────

export async function sendVerificationEmail(
  email: string,
  username: string,
  confirmUrl: string,
) {
  return resend.emails.send({
    from: FROM,
    to: email,
    subject: 'Bevestig je Gameinside account',
    html: VerificationEmail({ username, confirmUrl }),
  });
}

// ── 2. Welkomstmail (na bevestiging) ───────────────────────────────────────

export async function sendWelcomeEmail(email: string, username: string) {
  return resend.emails.send({
    from: FROM,
    to: email,
    subject: 'Welkom bij de Gameinside community! 🎮',
    html: WelcomeEmail({ username }),
  });
}

// ── 3. Reactie-notificatie ─────────────────────────────────────────────────

export async function sendReplyNotification(opts: {
  toEmail: string;
  recipientUsername: string;
  senderUsername: string;
  originalComment: string;
  replyContent: string;
  articleSlug: string;
  articleTitle: string;
}) {
  const articleUrl = `https://gameinside.nl/artikel/${opts.articleSlug}`;
  return resend.emails.send({
    from: FROM,
    to: opts.toEmail,
    subject: `${opts.senderUsername} heeft gereageerd op jouw reactie`,
    html: ReplyNotificationEmail({
      recipientUsername: opts.recipientUsername,
      senderUsername: opts.senderUsername,
      originalComment: opts.originalComment,
      replyContent: opts.replyContent,
      articleTitle: opts.articleTitle,
      articleUrl,
    }),
  });
}

// ── 4. Like-mijlpaal notificatie ───────────────────────────────────────────

export async function sendLikeNotification(opts: {
  toEmail: string;
  username: string;
  commentContent: string;
  likeCount: number;
  articleSlug: string;
  articleTitle: string;
}) {
  const articleUrl = `https://gameinside.nl/artikel/${opts.articleSlug}`;
  return resend.emails.send({
    from: FROM,
    to: opts.toEmail,
    subject: `Je reactie heeft ${opts.likeCount} likes gekregen! 👍`,
    html: LikeNotificationEmail({
      username: opts.username,
      commentContent: opts.commentContent,
      likeCount: opts.likeCount,
      articleTitle: opts.articleTitle,
      articleUrl,
    }),
  });
}

// ── 5. Wachtwoord-reset email ──────────────────────────────────────────────

export async function sendPasswordResetEmail(
  email: string,
  username: string,
  resetUrl: string,
) {
  return resend.emails.send({
    from: FROM,
    to: email,
    subject: 'Reset je Gameinside wachtwoord',
    html: PasswordResetEmail({ username, resetUrl }),
  });
}
