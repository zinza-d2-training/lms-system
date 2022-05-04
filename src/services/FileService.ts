import { files } from '../fakeData/files';
import { File } from '../types/files';

export async function getFiles(courseId: number): Promise<File[]> {
  return files.filter((item) => item.courseId === courseId);
}
