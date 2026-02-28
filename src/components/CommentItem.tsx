'use client';

import { useState } from 'react';
import type { Comment, Profile } from '@/lib/supabase';

const ADMIN_EMAIL = 'redactie@gameinside.nl';

function timeAgo(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60)   return 'zojuist';
  if (diff < 3600) return `${Math.floor(diff / 60)} min geleden`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} uur geleden`;
  if (diff < 172800) return 'gisteren';
  if (diff < 604800) return `${Math.floor(diff / 86400)} dagen geleden`;
  return new Date(dateStr).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' });
}

function Avatar({ profile }: { profile?: Profile }) {
  const name    = profile?.username ?? '?';
  const initials = name.slice(0, 2).toUpperCase();
  const colors  = ['#7c3aed','#00aaff','#059669','#dc2626','#d97706','#db2777'];
  const color   = colors[name.charCodeAt(0) % colors.length];

  if (profile?.avatar_url) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={profile.avatar_url} alt={name}
           className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
    );
  }
  return (
    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
                    text-white text-sm font-black"
         style={{ backgroundColor: color }}>
      {initials}
    </div>
  );
}

interface Props {
  comment: Comment;
  currentUserId?: string;
  currentUserEmail?: string;
  isReply?: boolean;
  onReply:  (parentId: string, content: string) => Promise<void>;
  onEdit:   (commentId: string, content: string) => Promise<void>;
  onDelete: (commentId: string) => Promise<void>;
  onLike:   (commentId: string) => Promise<void>;
  onLoginRequired: () => void;
}

export default function CommentItem({
  comment, currentUserId, currentUserEmail, isReply = false,
  onReply, onEdit, onDelete, onLike, onLoginRequired,
}: Props) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText]       = useState('');
  const [editMode, setEditMode]         = useState(false);
  const [editText, setEditText]         = useState(comment.content);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [busy, setBusy]                 = useState(false);

  const isOwner  = currentUserId === comment.user_id;
  const isAdmin  = currentUserEmail === ADMIN_EMAIL;
  const canDelete = isOwner || isAdmin;
  const canEdit   = isOwner;

  const handleLike = async () => {
    if (!currentUserId) { onLoginRequired(); return; }
    await onLike(comment.id);
  };

  const handleReplySubmit = async () => {
    if (!replyText.trim()) return;
    setBusy(true);
    await onReply(comment.id, replyText);
    setReplyText('');
    setShowReplyBox(false);
    setBusy(false);
  };

  const handleEdit = async () => {
    if (!editText.trim()) return;
    setBusy(true);
    await onEdit(comment.id, editText);
    setEditMode(false);
    setBusy(false);
  };

  if (comment.is_deleted) {
    return (
      <div className={`${isReply ? 'ml-10' : ''} py-3`}>
        <p className="text-[#555e6b] text-sm italic">[Reactie verwijderd]</p>
      </div>
    );
  }

  return (
    <div className={isReply ? 'ml-10 mt-3' : ''}>
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <Avatar profile={comment.profile} />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#00aaff] font-bold text-sm">
                  {comment.profile?.username ?? 'Onbekend'}
                </span>
                <span className="text-[10px] bg-[#00aaff]/10 border border-[#00aaff]/20
                                 text-[#00aaff] px-1.5 py-0.5 rounded font-semibold uppercase tracking-wide">
                  Gameinside Member
                </span>
                {isAdmin && comment.user_id === currentUserId && (
                  <span className="text-[10px] bg-[#7c3aed]/10 border border-[#7c3aed]/20
                                   text-purple-300 px-1.5 py-0.5 rounded font-semibold uppercase tracking-wide">
                    Redactie
                  </span>
                )}
              </div>
              <span className="text-[#8b949e] text-xs">{timeAgo(comment.created_at)}</span>
            </div>
          </div>

          {/* Three-dot menu */}
          {canDelete && (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="text-[#555e6b] hover:text-[#8b949e] transition-colors px-1 text-lg leading-none"
                aria-label="Opties"
              >
                ···
              </button>
              {menuOpen && (
                <div className="absolute right-0 top-7 bg-[#1c2333] border border-[#30363d]
                                rounded-lg shadow-xl z-10 py-1 min-w-[130px]">
                  {canEdit && (
                    <button
                      onClick={() => { setEditMode(true); setMenuOpen(false); }}
                      className="w-full text-left px-3 py-1.5 text-sm text-[#e6edf3]
                                 hover:bg-[#30363d] transition-colors"
                    >
                      ✏️ Bewerken
                    </button>
                  )}
                  <button
                    onClick={async () => { setMenuOpen(false); await onDelete(comment.id); }}
                    className="w-full text-left px-3 py-1.5 text-sm text-red-400
                               hover:bg-[#30363d] transition-colors"
                  >
                    🗑️ Verwijderen
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Body */}
        {editMode ? (
          <div className="space-y-2">
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              maxLength={1000}
              rows={3}
              className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#00aaff]
                         rounded-lg px-3 py-2 text-sm text-[#e6edf3] resize-none
                         focus:outline-none transition-colors"
            />
            <div className="flex gap-2">
              <button
                onClick={handleEdit}
                disabled={busy}
                className="px-3 py-1.5 bg-[#00aaff] hover:bg-[#0090dd] disabled:opacity-50
                           text-white text-xs font-bold rounded-lg transition-colors"
              >
                Opslaan
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="px-3 py-1.5 text-[#8b949e] hover:text-white text-xs rounded-lg
                           border border-[#30363d] hover:border-[#555e6b] transition-colors"
              >
                Annuleren
              </button>
            </div>
          </div>
        ) : (
          <p className="text-[#e6edf3] text-sm leading-relaxed whitespace-pre-wrap">
            {comment.content}
          </p>
        )}

        {/* Actions */}
        {!editMode && (
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#30363d]/60">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 text-xs font-semibold transition-colors
                          ${comment.liked_by_user
                            ? 'text-[#7c3aed]'
                            : 'text-[#8b949e] hover:text-[#7c3aed]'}`}
            >
              👍 {comment.likes > 0 ? comment.likes : ''}
            </button>

            {!isReply && (
              <button
                onClick={() => {
                  if (!currentUserId) { onLoginRequired(); return; }
                  setShowReplyBox((s) => !s);
                }}
                className="text-xs text-[#8b949e] hover:text-[#00aaff] font-semibold
                           transition-colors"
              >
                Reageer
              </button>
            )}

            {comment.updated_at !== comment.created_at && (
              <span className="text-[10px] text-[#555e6b] ml-auto">bewerkt</span>
            )}
          </div>
        )}
      </div>

      {/* Reply box */}
      {showReplyBox && (
        <div className="ml-10 mt-2">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-3">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value.slice(0, 1000))}
              placeholder="Schrijf een reactie…"
              rows={2}
              className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#00aaff]
                         rounded-lg px-3 py-2 text-sm text-[#e6edf3] resize-none
                         focus:outline-none transition-colors placeholder-[#555e6b]"
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-[#555e6b]">{replyText.length}/1000</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowReplyBox(false)}
                  className="px-3 py-1.5 text-xs text-[#8b949e] hover:text-white
                             border border-[#30363d] hover:border-[#555e6b]
                             rounded-lg transition-colors"
                >
                  Annuleren
                </button>
                <button
                  onClick={handleReplySubmit}
                  disabled={busy || !replyText.trim()}
                  className="px-3 py-1.5 bg-[#00aaff] hover:bg-[#0090dd] disabled:opacity-50
                             text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Plaatsen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nested replies (max 1 level deep) */}
      {!isReply && comment.replies && comment.replies.length > 0 && (
        <div className="mt-1 space-y-2">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              currentUserId={currentUserId}
              currentUserEmail={currentUserEmail}
              isReply
              onReply={onReply}
              onEdit={onEdit}
              onDelete={onDelete}
              onLike={onLike}
              onLoginRequired={onLoginRequired}
            />
          ))}
        </div>
      )}
    </div>
  );
}
