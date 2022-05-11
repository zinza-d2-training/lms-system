import { UserDB } from './../types/users';

export const Users: UserDB[] = [
  {
    id: 1,
    email: 'user1@gmail.com',
    password: '12345',
    firstName: 'firstname1',
    lastName: 'lastname1',
    avatar:
      'https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346756_intro.png?',
    bio: 'Content bio 1',
    timeZone: 'GMT+7',
    language: 'VietNam1'
  },
  {
    id: 2,
    email: 'user2@gmail.com',
    password: '12345',
    firstName: 'firstname2',
    lastName: 'lastname2',
    avatar:
      'https://i2.wp.com/d3j0t7vrtr92dk.cloudfront.net/images/default_user2x.png?ssl=1',
    bio: 'Content bio 2',
    timeZone: 'GMT+7',
    language: 'VietNam2'
  }
];
