import { Content, ContentFormData } from '../types/contents';
import { contents } from './../fakeData/contents';
import { sortBy, groupBy } from 'lodash';
import { Users } from '../fakeData/users';

export async function getCourseContents(courseId: number): Promise<Content[]> {
  return contents.filter((item) => item.courseId === courseId);
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
export async function updateContent(contentId: number, value: ContentFormData) {
  const content = contents.find((item) => item.id === contentId) as Content;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const index = contents.indexOf(content);

  // @TODO: Call APi
  // contents[index] = { ...content, ...value };
}

export async function createContent(courseId: number, value: ContentFormData) {
  const newContent = {
    ...value,
    courseId: courseId,
    id: contents.length + 1,
    survey: contents.length + 1
  };
  return newContent;
}
export async function getUserInfo(userId: number) {
  return Users.find((item) => item.id === userId);
}
