import { Content } from '../types/contents';
import { contents } from './../fakeData/contents';

export async function getCourseContents(courseId: number): Promise<Content[]> {
  return contents.filter((item) => item.courseId === courseId)

}
