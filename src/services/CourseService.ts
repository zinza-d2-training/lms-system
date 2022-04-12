import { courses } from '../fakeData/courses';
import {
  CourseBasic,
  CourseFullInfo,
  CourseInfo,
  CoursesDB
} from '../types/courses';
import { pick } from 'lodash';

export interface FilterCourse {
  id?: number;
  search?: string;
  page?: number;
  totalPage?: number;
}

export async function createCourse(courseInfo: CourseInfo) {
  const newCourse = { ...courseInfo, id: courses.length + 1 };
  courses.push(newCourse);
}

export async function updateCourse(courseId: number, courseInfo: CourseInfo) {
  let course = courses.find((item) => item.id === courseId) as CourseFullInfo;

  const index = courses.indexOf(course);

  courses[index] = { ...course, ...courseInfo };
}

export async function getSearchCourses(
  filter?: FilterCourse
): Promise<CoursesDB[]> {
  if (!filter) return courses;
  return courses.filter((item) => {
    let searchKey = true;
    if (filter.id) return filter.id === item.id;
    return searchKey;
  });
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
