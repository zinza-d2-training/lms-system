import { files } from '../fakeData/files';
import { Files } from '../types/files';

export async function getFiles(courseId: number): Promise<Files[]> {
  return files.filter((item) => item.courseId === courseId);
}
