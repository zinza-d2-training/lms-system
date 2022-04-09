export interface CoursesDB {
  id: number;
  title: string;
  imageURL: string;
  description: string;
}

export type CourseInfo = Pick<CoursesDB, 'title' | 'imageURL' | 'description'>

export type CourseBasic = Pick<CoursesDB, 'id' | 'title'>

export type CourseFullInfo = Pick<CoursesDB, 'id' | 'title' | 'imageURL' | 'description'>
