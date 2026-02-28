'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase, type Comment } from '@/lib/supabase';

export type SortOrder = 'liked' | 'newest' | 'oldest';

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

    // Fetch top-level comments
    const { data: topLevel, error, count } = await supabase
      .from('comments')
      .select('*, profile:profiles(id,username,avatar_url,comment_count)', { count: 'exact' })
      .eq('article_slug', articleSlug)
      .is('parent_id', null)
      .eq('is_deleted', false)
      .order(orderCol, { ascending })
      .range(0, page * PAGE_SIZE - 1);

    if (error || !topLevel) { setLoading(false); return; }

    // Fetch all replies for those top-level comments in one query
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

    // Fetch likes by current user
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

    // Nest replies under parents
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

  // ── Mutations ────────────────────────────────────────────────────────────

  const postComment = async (content: string, parentId?: string) => {
    if (!userId) throw new Error('Niet ingelogd');
    const { error } = await supabase.from('comments').insert({
      article_slug: articleSlug,
      user_id: userId,
      parent_id: parentId ?? null,
      content: content.trim(),
    });
    if (error) throw error;
    // Bump comment_count on profile
    await supabase.rpc('increment_comment_count', { profile_id: userId });
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

    // Admin can delete any comment; regular users only their own
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
