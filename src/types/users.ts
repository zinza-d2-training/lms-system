export enum UserRole {
  Instructor = 'Instructor',
  Learner = 'Learner'
}

export type UserDB = {
  id: number;
  email: string;
  username?: string;
  role: UserRole;
  password: string;
};

export type UserFullInfo = Omit<UserDB, 'password'>;

export type User = Pick<UserFullInfo, 'id' | 'email' | 'username' | 'role'>;
