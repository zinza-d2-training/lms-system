export interface CoursesDB {
  id: number;
  title: string;
  image?: string;
  description: string;
  removeImage: boolean;
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

export type CourseInfo = Pick<
  CoursesDB,
  'title' | 'image' | 'description' | 'removeImage'
>;

export type CourseBasic = Pick<
  CoursesDB,
  'id' | 'title' | 'image' | 'updatedAt'
>;
