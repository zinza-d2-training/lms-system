import { pick } from 'lodash';
import { courseCompletions, courses } from '../fakeData/courses';
import { CourseBasic, CourseInfo, CoursesDB } from '../types/courses';
import axiosClient from '../utils/axios';

export interface FilterCourse {
  id?: number;
  search?: string;
  page?: number;
  totalPage?: number;
}

export async function createCourse(courseInfo: FormData) {
  await axiosClient.post('/courses/add', courseInfo, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
}

export async function updateCourse(courseId: number, courseInfo: CourseInfo) {
  let course = courses.find((item) => item.id === courseId) as CoursesDB;

  const index = courses.indexOf(course);

  courses[index] = { ...course, ...courseInfo };
}

export async function getCourses(
  filter?: FilterCourse
): Promise<CourseBasic[]> {
  const coursesBasic = courses.map((course) => pick(course, ['id', 'title']));

  if (!filter) return coursesBasic;

  return coursesBasic.filter((course) => {
    if (filter.id) return filter.id === course.id;

    if (filter.search || filter.search === '') {
      return new RegExp(filter.search, 'i').test(course.title);
    }
    return true;
  });
}

export async function getCourseInfoForm(courseId: number) {
  const course = courses.find((item) => item.id === courseId);

  return course ? { ...course } : {};
}

export async function getCourseUser(userId: number) {
  return courseCompletions.filter((item) => item.userId === userId);
}
