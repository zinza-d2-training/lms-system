export type CourseDB = {
  id: number;
  title: string;
  imageURL?: string;
  description: string;
  category: string;
  timeUpdate: string;
};

export type ListCourse = Omit<CourseDB, 'description'>;

export type Course = Pick<
  ListCourse,
  'id' | 'title' | 'imageURL' | 'category' | 'timeUpdate'
>;
