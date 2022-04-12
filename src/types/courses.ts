export type CourseDB = {
  id: number;
  title: string;
  imageURL?: string;
  description: string;
  category: string;
  timeUpdate: string;
};

export type UserFullInfo = Omit<CourseDB, 'description'>;

export type User = Pick<
  UserFullInfo,
  'id' | 'title' | 'imageURL' | 'category' | 'timeUpdate'
>;
