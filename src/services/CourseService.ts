import { courseCompletions, courses } from '../fakeData/courses';
import { CourseBasic, CourseInfo } from '../types/courses';
import axiosClient from '../utils/axios';

export interface FilterCourse {
  title?: string;
  limit?: number;
  page?: number;
}

export interface GetCourses {
  courses: CourseBasic[];
  count: number;
}
export async function createCourse(courseInfo: CourseInfo) {
  const newCourse = { ...courseInfo, id: courses.length + 1 };
  courses.push(newCourse);
}
export async function updateCourse(courseId: number, courseInfo: FormData) {
  return await axiosClient.put(`/courses/${courseId}/edit`, courseInfo, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
}
export async function getCourses(
  filterData: FilterCourse
): Promise<GetCourses> {
  const { data } = await axiosClient.get(
    `/courses?title=${filterData.title}&page=${filterData.page}&limit=${filterData.limit}`
  );
  return data;
}
// get course details
export async function getCourseInfoForm(courseId?: number) {
  if (courseId) {
    const course = await axiosClient.get(`/courses/${courseId}`);

    return { ...course };
  }
}
// get course user use course
export async function getCourseUser(userId: number) {
  return courseCompletions.filter((item) => item.userId === userId);
}
