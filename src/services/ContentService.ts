import { Content, ContentFormData } from '../types/contents';
import { contents } from './../fakeData/contents';

export async function getCourseContents(courseId: number): Promise<Content[]> {
  return contents.filter((item) => item.courseId === courseId);
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
  console.log(newContent);
  return newContent;
}
