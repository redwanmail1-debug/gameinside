'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase, type Comment } from '@/lib/supabase';

export type SortOrder = 'liked' | 'newest' | 'oldest';

const LIKE_MILESTONES = [5, 10, 25];

export function useComments(articleSlug: string, userId?: string) {
  const [comments, setComments]   = useState<Comment[]>([]);
  const [loading, setLoading]     = useState(true);
  const [total, setTotal]         = useState(0);
  const [page, setPage]           = useState(1);
  const [sort, setSort]           = useState<SortOrder>('liked');
  const PAGE_SIZE = 10;

  const fetchComments = useCallback(async () => {
    setLoading(true);

    const orderCol  = sort === 'oldest' ? 'created_at' : sort === 'newest' ? 'created_at' : 'likes';
    const ascending = sort === 'oldest';

    // Haal top-level reacties op
    const { data: topLevel, error, count } = await supabase
      .from('comments')
      .select('*, profile:profiles(id,username,avatar_url,comment_count)', { count: 'exact' })
      .eq('article_slug', articleSlug)
      .is('parent_id', null)
      .eq('is_deleted', false)
      .order(orderCol, { ascending })
      .range(0, page * PAGE_SIZE - 1);

    if (error || !topLevel) { setLoading(false); return; }

    // Haal alle reacties op in één query
    const parentIds = topLevel.map((c) => c.id);
    let replies: Comment[] = [];
    if (parentIds.length > 0) {
      const { data: replyData } = await supabase
        .from('comments')
        .select('*, profile:profiles(id,username,avatar_url,comment_count)')
        .in('parent_id', parentIds)
        .eq('is_deleted', false)
        .order('created_at', { ascending: true });
      replies = (replyData ?? []) as Comment[];
    }

    // Haal likes van huidige gebruiker op
    let likedIds = new Set<string>();
    if (userId) {
      const allIds = [...topLevel.map((c) => c.id), ...replies.map((c) => c.id)];
      const { data: likeData } = await supabase
        .from('comment_likes')
        .select('comment_id')
        .eq('user_id', userId)
        .in('comment_id', allIds);
      likedIds = new Set((likeData ?? []).map((l) => l.comment_id));
    }

    // Nest reacties onder ouders
    const nested: Comment[] = topLevel.map((c) => ({
      ...c,
      liked_by_user: likedIds.has(c.id),
      replies: replies
        .filter((r) => r.parent_id === c.id)
        .map((r) => ({ ...r, liked_by_user: likedIds.has(r.id) })),
    }));

    setComments(nested);
    setTotal(count ?? 0);
    setLoading(false);
  }, [articleSlug, userId, page, sort]);

  useEffect(() => { fetchComments(); }, [fetchComments]);

  // ── Mutations ─────────────────────────────────────────────────────────────

  const postComment = async (content: string, parentId?: string) => {
    if (!userId) throw new Error('Niet ingelogd');
    const { error } = await supabase.from('comments').insert({
      article_slug: articleSlug,
      user_id: userId,
      parent_id: parentId ?? null,
      content: content.trim(),
    });
    if (error) throw error;

    // Verhoog reactie-teller op profiel
    await supabase.rpc('increment_comment_count', { profile_id: userId });

    // Stuur reactie-notificatie als het een antwoord is (fire-and-forget)
    if (parentId) {
      fetch('/api/email/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentCommentId: parentId,
          replyContent: content.trim(),
          senderUserId: userId,
          articleSlug,
        }),
      }).catch(() => {});
    }

    await fetchComments();
  };

  const editComment = async (commentId: string, content: string) => {
    const { error } = await supabase
      .from('comments')
      .update({ content: content.trim(), updated_at: new Date().toISOString() })
      .eq('id', commentId)
      .eq('user_id', userId);
    if (error) throw error;
    await fetchComments();
  };

  const deleteComment = async (commentId: string, isAdmin: boolean) => {
    const query = supabase
      .from('comments')
      .update({ is_deleted: true })
      .eq('id', commentId);

    // Admin kan elke reactie verwijderen, gebruikers alleen hun eigen
    if (!isAdmin) query.eq('user_id', userId);

    const { error } = await query;
    if (error) throw error;
    await fetchComments();
  };

  const toggleLike = async (commentId: string) => {
    if (!userId) throw new Error('Niet ingelogd');

    const alreadyLiked = comments
      .flatMap((c) => [c, ...(c.replies ?? [])])
      .find((c) => c.id === commentId)?.liked_by_user;

    if (alreadyLiked) {
      await supabase
        .from('comment_likes')
        .delete()
        .eq('user_id', userId)
        .eq('comment_id', commentId);
      await supabase.rpc('decrement_likes', { comment_id: commentId });
    } else {
      await supabase.from('comment_likes').insert({ user_id: userId, comment_id: commentId });
      await supabase.rpc('increment_likes', { comment_id: commentId });

      // Controleer like-mijlpaal na increment (fire-and-forget)
      const currentLikes =
        comments
          .flatMap((c) => [c, ...(c.replies ?? [])])
          .find((c) => c.id === commentId)?.likes ?? 0;
      const newLikes = currentLikes + 1;

      if (LIKE_MILESTONES.includes(newLikes)) {
        fetch('/api/email/like', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ commentId, likerUserId: userId }),
        }).catch(() => {});
      }
    }

    await fetchComments();
  };

  const loadMore = () => setPage((p) => p + 1);
  const hasMore  = comments.length < total;

  return {
    comments, loading, total, sort, setSort,
    hasMore, loadMore,
    postComment, editComment, deleteComment, toggleLike,
    refresh: fetchComments,
  };
}
