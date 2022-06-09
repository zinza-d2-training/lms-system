import { useEffect, useState } from 'react';
import {
  discussionInfo,
  FilterDiscussion,
  getCommentInfo,
  getComments,
  getDiscussions
} from '../../services/DiscussionService';
import { Comment, Discussion } from '../../types/discussions';

// Get all discussion
export const useDiscussions = (filterData: FilterDiscussion) => {
  const [discussions, setDiscussions] = useState<Discussion[] | undefined>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const discussions = async (filterData: FilterDiscussion) => {
      const data = await getDiscussions(filterData);
      setDiscussions(Object.values(data));
    };
    discussions(filterData);

    return () => {};
  }, []);

  return {
    discussions
  };
};

// Get discussion by Id
export const useDiscussionInfo = (id?: number) => {
  const [discussion, setDiscussion] = useState<Discussion | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const discussion = async (id?: number) => {
      if (id) {
        const data = (await discussionInfo(id)) as unknown as Discussion;
        setDiscussion(data);
      }
      setLoading(false);
    };

    discussion(id);

    return () => {};
  }, [id]);

  return {
    discussion,
    loading
  };
};

export const useComment = (id: number) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const getComment = async (id: number) => {
      const data = await getComments(id);

      setComments(data);
    };

    getComment(id);

    return () => {};
  }, [id]);

  return { comments };
};

export const useCommentInfo = (id?: number) => {
  const [commentInfo, setCommentInfo] = useState<Comment | undefined>();

  useEffect(() => {
    const getComment = async (id?: number) => {
      if (id) {
        const data = await getCommentInfo(id);
        setCommentInfo(data);
      }
    };
    getComment(id);

    return () => {};
  }, [id]);

  return { commentInfo };
};
