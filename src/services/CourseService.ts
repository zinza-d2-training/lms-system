import { courseCompletions, courses } from '../fakeData/courses';
import { CourseBasic, CourseInfo } from '../types/courses';
import axiosClient from '../utils/axios';
import { urlEncodeQueryParams } from '../utils/urlHelper';

export interface FilterCourse {
  search?: string;
  limit?: number;
  page?: number;
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
  filterData?: FilterCourse
): Promise<CourseBasic[]> {
  const objectFilters = {
    filterData
  };
  //const queries = urlEncodeQueryParams(objectFilters);
  const {data} = await axiosClient.get(`/courses?title=`);
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
