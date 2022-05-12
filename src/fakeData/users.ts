import { UserDB } from './../types/users';

export const Users: UserDB[] = [
  {
    id: 1,
    email: 'user1@gmail.com',
    password: '12345',
    firstName: 'FirtName User1',
    lastName: 'LastName User1',
    userName: 'UserName1',
    avatar:
      'https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346756_intro.png?',
    bio: 'Content Bio User 1'
  },
  {
    id: 2,
    email: 'user2@gmail.com',
    password: '12345',
    firstName: 'FirtName User 2',
    lastName: 'FirtName User 2',
    userName: 'UserName2',
    avatar:
      'https://i2.wp.com/d3j0t7vrtr92dk.cloudfront.net/images/default_user2x.png?ssl=1',
    bio: 'Content Bio User 1'
  }
];
