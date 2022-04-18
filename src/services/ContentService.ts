import { Content, ContentInfo } from '../types/contents';
import { contents } from './../fakeData/contents';

export async function getCourseContents(courseId: number): Promise<Content[]> {
  return contents.filter((item) => item.courseId === courseId);
}

export async function reorderCourseContents(
  orderMapping: Record<number, number>
): Promise<Content[]> {
  return contents.map((item) => {
    return {
      ...item,
      sequence: orderMapping[item.id] ? orderMapping[item.id] : item.sequence
    };
  });
}

export async function updateContent(
  contentId: number,
  contentInfo: ContentInfo
) {
  const content = contents.find((item) => item.id === contentId) as Content;

  const index = contents.indexOf(content);

  contents[index] = { ...content, ...contentInfo };
}
