export enum UserRole {
  Instructor = 'Instructor',
  Learner = 'Learner'
}

export type UserDB = {
  id: number;
  email: string;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  bio?: string;
  timeZone?: string;
  language?: string;
};

export type UserFullInfo = Omit<UserDB, 'password'>;

export type User = Pick<UserFullInfo, 'id' | 'email' | 'userName'>;
