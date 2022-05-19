export interface CoursesDB {
  id: number;
  title: string;
  imageURL?: string;
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

export type CourseInfo = Pick<CoursesDB, 'title' | 'imageURL' | 'description'>;

export type CourseBasic = Pick<CoursesDB, 'id' | 'title' | 'imageURL'>;
