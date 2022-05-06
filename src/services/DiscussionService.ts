import { CommentForm, DiscussionForm } from '../types/discussions';
import { comments } from './../fakeData/comments';
import { discussions } from './../fakeData/discussion';
import { Discussion } from './../types/discussions';
import { getCurrentUser } from './AuthService';

export async function createDiscussion(discussion: DiscussionForm) {
  const user = getCurrentUser();

  const newDiscussion = {
    ...discussion,
    userId: user
  };
  console.log(newDiscussion);
  return newDiscussion;
}

export async function getDiscussions() {
  return discussions.map((item) => item);
}

export async function discussionInfo(id: number) {
  return discussions.find((item) => item.id === id);
}

export async function updateDiscussion(
  id: number,
  discussionForm: DiscussionForm
) {
  let discussion = discussions.find((item) => item.id === id) as Discussion;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const index = discussions.indexOf(discussion);
  // @Call Api
}

export async function createComment(
  discussionId: number,
  commentForm: CommentForm
) {
  const user = JSON.parse(localStorage.getItem('user') as string);
  const discussion = discussions.find((item) => item.id === discussionId);
  if (discussion && user) {
    const newComment = {
      ...commentForm,
      discussionId: discussion.id,
      userId: user.id
    };
    console.log(newComment);
    return newComment;
  }
  return undefined;
}

export async function commentInfo(id: number) {
  return comments.find((item) => item.id === id);
}

export async function updateComment(id: number, commentForm: DiscussionForm) {
  // @Call Api
}
