import { Content, ContentFormData } from '../types/contents';
import { contents } from './../fakeData/contents';
import { sortBy, groupBy } from 'lodash';
import { Users } from '../fakeData/users';
import axiosClient from '../utils/axios';

export async function getCourseContents(courseId: number): Promise<Content[]> {
  const { data } = await axiosClient.get(`/courses/${courseId}/contents`);
  return data;
}

export async function getLastContentsMapping(
  courseIds: number[]
): Promise<Map<number, number>> {
  const mapping = new Map<number, number>();
  const grouped = groupBy(
    sortBy(contents, ['courseId', 'sequence']),
    'courseId'
  );
  Object.keys(grouped).forEach((courseId) => {
    if (grouped[courseId].length) {
      mapping.set(Number(courseId), grouped[courseId][0].id);
    }
  });
  return mapping;
}

export async function getContentDetail(contentId: number) {
  return contents.find((item) => item.id === contentId);
}

export async function reorderCourseContents(
  courseId: number,
  orderMapping: Record<number, number>
) {
  const contentItem = contents.filter((item) => item.courseId === courseId);

  return contentItem.map((item) => {
    return {
      ...item,
      sequence: orderMapping[item.id] ? orderMapping[item.id] : item.sequence
    };
  });
}
export async function updateContent(
  courseId: number,
  contentId: number,
  value: ContentFormData
) {
  return await axiosClient.put(
    `/courses/${courseId}/contents/${contentId}/edit`,
    value
  );
}

export async function createContent(courseId: number, value: ContentFormData) {
  return await axiosClient.post(`/courses/${courseId}/contents/add`, value);
}
export async function getUserInfo(userId: number) {
  return Users.find((item) => item.id === userId);
}
