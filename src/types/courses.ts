export type CourseDB = {
	id: number;
	title: string;
	imageURL?: string;
	description: string;
};

export type UserFullInfo = Omit<CourseDB,'description'>;

export type User = Pick<UserFullInfo, 'id' | 'title' | 'imageURL'>
