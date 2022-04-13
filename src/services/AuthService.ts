import { pick } from 'lodash';
import { Users } from '../fakeData/users';
import { User, UserFullInfo, UserRole } from '../types/users';
export type UserLogin = Pick<User, 'email'> & { password: string };
export type UserInfo = Pick<UserFullInfo, 'email' | 'username' >;
const KEY_USER = 'user';

export async function login(user: UserLogin) {
  const found = Users.find(
    (item) => item.email === user.email && item.password === user.password
  );

  if (found) {
    localStorage.setItem(
      KEY_USER,
      JSON.stringify(pick(found, 'id', 'email'))
    );
    localStorage.setItem(
      'role',
      JSON.stringify(UserRole.Instructor)
    );
  } else {
    throw new Error('User not found');
  }
}

export async function logout() {
  localStorage.removeItem(KEY_USER);
  localStorage.removeItem('role');
}

export async function updateUser(info: UserInfo) {
  let currentUser = JSON.parse(localStorage.getItem(KEY_USER) as string);
  if (!currentUser) {
    return undefined;
  }

  let user = Users.find(
    (item) => item.id === currentUser.id
  ) as UserFullInfo & {
    password: string;
  };
  const index = Users.indexOf(user);
  Users[index] = { ...user, ...info };
}

export function getCurrentUser() {
  return localStorage.getItem(KEY_USER);
}

export async function changeRole(role: UserRole) {
  localStorage.setItem(
    'role',
    role
  );
}

