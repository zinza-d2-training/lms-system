import { Discussion } from '../types/discussions';

export const discussions: Discussion[] = [
  {
    id: 1,
    userId: 1,
    topic: 'hello',
    description: 'this is friday',
    comment: [
      {
        id: 1,
        discussionId: 1,
        comment: 'comment',
        userId: 1
      }
    ]
  },
  {
    id: 2,
    userId: 1,
    topic: 'the second',
    description: 'this is weekend',
    comment: [
      {
        id: 1,
        discussionId: 2,
        comment: 'comment',
        userId: 1
      }
    ]
  }
];
