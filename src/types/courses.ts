export type CourseDB = {
  id: number;
  title: string;
  imageURL?: string;
  description: string;
};

export type ListCourse = Omit<CourseDB, 'description'>;

export type Course = Pick<ListCourse, 'id' | 'title' | 'imageURL'>;
