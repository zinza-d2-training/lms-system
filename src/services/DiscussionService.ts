import { CommentFormInfo, DiscussionForm } from '../types/discussions';
import axiosClient from '../utils/axios';
import { comments } from './../fakeData/comments';
import { discussions } from './../fakeData/discussion';
import { Discussion } from './../types/discussions';

export interface FilterDiscussion {
  title?: string;
  limit?: number;
  page?: number;
}

export interface GetDiscussion {
  discussion: Discussion[];
  count: number;
}
export async function createDiscussion(discussion: DiscussionForm) {
  return await axiosClient.post(`/discussion/add`, discussion);
}

export async function getDiscussions(
  filterData: FilterDiscussion
): Promise<GetDiscussion> {
  const { data } = await axiosClient.get(
    `/discussion?title=${filterData.title}&page=${filterData.page}&limit=${filterData.limit}`
  );
  return data;
}

export async function discussionInfo(id: number) {
  if (id) {
    return await (
      await axiosClient.get(`/discussion/${id}`)
    ).data;
  }
}

export async function updateDiscussion(
  id: number,
  discussionForm: DiscussionForm
) {
  return await axiosClient.put(`/discussion/${id}/edit`, discussionForm);
}

// delete discussion
export async function deleteDiscussion(id?: number) {
  if (id) {
    return await axiosClient.delete(`/discussion/${id}`);
  }
}

export async function getComments(discussionId: number) {
  return comments.filter((item) => item.discussionId === discussionId);
}

export async function createComment(
  discussionId: number,
  commentForm: CommentFormInfo
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

export async function getCommentInfo(id: number) {
  return comments.find((item) => item.id === id);
}

export async function updateComment(id: number, commentForm: DiscussionForm) {
  // @Call Api
}
