import { UserDB, UserRole } from './../types/users';

export const Users: UserDB[] = [
  {
    id: 1,
    email: 'user1@gmail.com',
    role: UserRole.Instructor,
    password: '12345'
  },
  {
    id: 2,
    email: 'user2@gmail.com',
    role: UserRole.Instructor,
    password: '12345'
  }
];
