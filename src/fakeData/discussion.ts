import { Discussion } from '../types/discussions';

export const discussions: Discussion[] = [
  {
    id: 1,
    userId: 1,
    topic: 'hello',
    message: 'this is friday',
    comment: [
      {
        id: 1,
        discussionId: 1,
        comment: 'comment',
        like: 0,
        userId: 1
      }
    ]
  },
  {
    id: 2,
    userId: 1,
    topic: 'the second',
    message: 'this is weekend',
    comment: [
      {
        id: 1,
        discussionId: 2,
        comment: 'comment',
        like: 0,
        userId: 1
      }
    ]
  }
];
