export interface Discussion {
  id: number;
  userId: number;
  topic: string;
  description: string;
  comment?: Array<Comment>;
}

export type Comment = {
  id: number;
  discussionId: number;
  comment: string;
  userId: number;
};

export type DiscussionForm = Omit<Discussion, 'id' | 'comment' | 'userId'>;

export type CommentFormInfo = Pick<Comment, 'comment'>;
