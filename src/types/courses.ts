export interface CoursesDB {
  id: number;
  title: string;
  image?: string;
  description: string;
  updatedAt?: string;
  createdAt?: string;
}

export interface CourseCompletion {
  id: number;
  courseId: number;
  userId: number;
  title: string;
  enrolledOn?: string;
  completionDate?: string;
}

export type CourseInfo = Pick<CoursesDB, 'title' | 'image' | 'description'>;

export type CourseBasic = Pick<CoursesDB, 'id' | 'title' | 'image' | 'updatedAt'>;
