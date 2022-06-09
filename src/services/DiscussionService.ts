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

export async function getComments(discussionId: number): Promise<Comment[]> {
  const { data } = await axiosClient.get(
    `/discussion/${discussionId}/comments`
  );

  return data;
}

export async function createComment(
  discussionId: number,
  commentForm: CommentFormInfo
) {
  return await axiosClient.post(
    `/discussion/${discussionId}/comments`,
    commentForm
  );
}

export async function getCommentInfo(id: number) {
  return comments.find((item) => item.id === id);
}

export async function updateComment(id: number, commentForm: DiscussionForm) {
  // @Call Api
}
