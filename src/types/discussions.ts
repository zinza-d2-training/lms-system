export interface Discussion {
  id: number;
  userId: number;
  topic: string;
  message: string;
  comment?: Array<Comment>;
}

export type Comment = {
  id: number;
  discussionId: number;
  comment: string;
  like: number;
  userId: number;
};

export type DiscussionForm = Omit<Discussion, 'id' | 'comment' | 'userId'>;

export type CommentForm = Pick<Comment, 'comment'>;
