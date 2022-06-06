import { courseCompletions } from '../fakeData/courses';
import { CourseBasic } from '../types/courses';
import { UserRole } from '../types/users';
import axiosClient from '../utils/axios';

export interface FilterCourse {
  title?: string;
  limit?: number;
  page?: number;
}

export interface GetCourses {
  courses: CourseBasic[];
  learn: CourseBasic[];
  count: number;
}
export async function createCourse(courseInfo: FormData) {
  return await axiosClient.post(`/courses/add`, courseInfo, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
}
export async function updateCourse(courseId: number, courseInfo: FormData) {
  return await axiosClient.put(`/courses/${courseId}/edit`, courseInfo, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
}
export async function getCourses(
  filterData: FilterCourse
): Promise<GetCourses> {
  const role = localStorage.getItem('role');
  const { data } = await axiosClient.get(
    `/courses?title=${filterData.title}&page=${filterData.page}&limit=${filterData.limit}&role=${role}`
  );
  return data;
}
// get course details
export async function getCourseInfoForm(courseId: number) {
  return await axiosClient.get(`/courses/${courseId}`);
}
// get course user use course
export async function getCourseUser(userId: number) {
  return courseCompletions.filter((item) => item.userId === userId);
}

// get course details
export async function deleteCourse(courseId: number) {
  return await axiosClient.delete(`/courses/${courseId}`);
}
