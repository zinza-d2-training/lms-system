import { useState, useEffect } from 'react';
import {
  discussionInfo,
  getDiscussions
} from '../../services/DiscussionService';
import { Discussion } from '../../types/discussions';

export const useDiscussions = () => {
  const [discussions, setDiscussions] = useState<Discussion[]>([]);

  useEffect(() => {
    const discussions = async () => {
      const data = await getDiscussions();
      setDiscussions(data);
    };
    discussions();

    return () => {};
  }, []);

  return {
    discussions
  };
};

export const useDiscussionInfo = (id?: number) => {
  const [discussion, setDiscussion] = useState<Discussion | undefined>();

  useEffect(() => {
    const discussion = async (id?: number) => {
      if (id) {
        const data = await discussionInfo(id);
        setDiscussion(data);
      }
    };
    discussion(id);

    return () => {};
  }, [id]);

  return {
    discussion
  };
};
