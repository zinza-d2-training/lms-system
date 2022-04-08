import { courses } from '../fakeData/courses';
import { CoursesDB } from '../types/courses';

export interface FilterCourse {
  id?: number;
  search?: string;
  page?: number;
  totalPage?: number;
}

export async function createCourse(courseInfo: CoursesDB) {}

export async function updateCourse(courseId: number, courseInfo: CoursesDB) {}

export async function getCourse(filter?: FilterCourse) {}

export async function getCourseInfoForm(courseId: number) {
  const course = courses.find((item) => item.id === courseId);

  return course ? { ...course } : {};
}
