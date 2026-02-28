'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useComments, type SortOrder } from '@/hooks/useComments';
import CommentItem from '@/components/CommentItem';
import AuthModal from '@/components/AuthModal';

interface Props {
  articleSlug: string;
}

export default function Comments({ articleSlug }: Props) {
  const { user, profile, loading: authLoading } = useAuth();
  const {
    comments, loading, total, sort, setSort,
    hasMore, loadMore,
    postComment, editComment, deleteComment, toggleLike,
  } = useComments(articleSlug, user?.id);

  const [text, setText]             = useState('');
  const [busy, setBusy]             = useState(false);
  const [authModal, setAuthModal]   = useState(false);
  const [authMode, setAuthMode]     = useState<'login' | 'register'>('login');

  const openLogin    = () => { setAuthMode('login');    setAuthModal(true); };
  const openRegister = () => { setAuthMode('register'); setAuthModal(true); };

  const handlePost = async () => {
    if (!text.trim() || !user) return;
    setBusy(true);
    try {
      await postComment(text);
      setText('');
    } finally {
      setBusy(false);
    }
  };

  const sortLabels: Record<SortOrder, string> = {
    liked:  'Meest geliked',
    newest: 'Nieuwste eerst',
    oldest: 'Oudste eerst',
  };

  return (
    <>
      {authModal && (
        <AuthModal initialMode={authMode} onClose={() => setAuthModal(false)} />
      )}

      <section className="mt-12 pt-8 border-t border-[#30363d]/60">

        {/* Header + sort */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <h2 className="text-xl font-black text-white">
            💬 Reacties {!loading && <span className="text-[#8b949e] font-normal text-base">({total})</span>}
          </h2>

          <div className="flex items-center gap-1 bg-[#161b22] border border-[#30363d] rounded-lg p-1">
            {(Object.keys(sortLabels) as SortOrder[]).map((key) => (
              <button
                key={key}
                onClick={() => setSort(key)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors
                  ${sort === key
                    ? 'bg-[#00aaff] text-white'
                    : 'text-[#8b949e] hover:text-white'}`}
              >
                {sortLabels[key]}
              </button>
            ))}
          </div>
        </div>

        {/* Compose box — logged in */}
        {!authLoading && user && profile && (
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
                              text-white text-sm font-black"
                   style={{ backgroundColor: ['#7c3aed','#00aaff','#059669','#dc2626','#d97706','#db2777'][
                     profile.username.charCodeAt(0) % 6
                   ] }}>
                {profile.username.slice(0, 2).toUpperCase()}
              </div>

              <div className="flex-1">
                <p className="text-xs text-[#8b949e] mb-2">
                  Reactie plaatsen als{' '}
                  <span className="text-[#00aaff] font-semibold">{profile.username}</span>
                </p>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value.slice(0, 1000))}
                  placeholder="Wat vind jij van dit artikel?"
                  rows={3}
                  className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#00aaff]
                             rounded-lg px-3 py-2.5 text-sm text-[#e6edf3] resize-none
                             focus:outline-none transition-colors placeholder-[#555e6b]"
                />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] text-[#555e6b]">{text.length}/1000</span>
                  <button
                    onClick={handlePost}
                    disabled={busy || !text.trim()}
                    className="px-4 py-2 bg-[#00aaff] hover:bg-[#0090dd] disabled:opacity-50
                               text-white text-sm font-bold rounded-lg transition-colors"
                  >
                    {busy ? 'Plaatsen…' : 'Plaats reactie'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA — not logged in */}
        {!authLoading && !user && (
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 mb-6 text-center">
            <p className="text-[#e6edf3] font-semibold mb-1">
              Om te reageren moet je ingelogd zijn.
            </p>
            <p className="text-[#8b949e] text-sm mb-4">
              Nog geen account? Registreer je gratis en praat mee!
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={openLogin}
                className="px-5 py-2 bg-[#00aaff] hover:bg-[#0090dd] text-white
                           font-bold text-sm rounded-lg transition-colors"
              >
                Inloggen
              </button>
              <button
                onClick={openRegister}
                className="px-5 py-2 border border-[#00aaff] text-[#00aaff]
                           hover:bg-[#00aaff]/10 font-bold text-sm rounded-lg transition-colors"
              >
                Gratis registreren
              </button>
            </div>
          </div>
        )}

        {/* Comment list */}
        {loading ? (
          <div className="space-y-4">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 animate-pulse">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#30363d]" />
                  <div className="space-y-1.5">
                    <div className="h-3 w-24 bg-[#30363d] rounded" />
                    <div className="h-2.5 w-16 bg-[#30363d] rounded" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-[#30363d] rounded w-full" />
                  <div className="h-3 bg-[#30363d] rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-4xl mb-3">💬</p>
            <p className="text-[#8b949e] font-semibold">Nog geen reacties. Wees de eerste!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                currentUserId={user?.id}
                currentUserEmail={user?.email}
                onReply={(parentId, content) => postComment(content, parentId)}
                onEdit={editComment}
                onDelete={(id) => deleteComment(id, user?.email === 'redactie@gameinside.nl')}
                onLike={toggleLike}
                onLoginRequired={openLogin}
              />
            ))}
          </div>
        )}

        {/* Load more */}
        {hasMore && !loading && (
          <div className="mt-6 text-center">
            <button
              onClick={loadMore}
              className="px-6 py-2.5 border border-[#30363d] hover:border-[#00aaff]
                         text-[#8b949e] hover:text-[#00aaff] font-semibold text-sm
                         rounded-lg transition-colors"
            >
              Laad meer reacties
            </button>
          </div>
        )}
      </section>
    </>
  );
}
