import { Users } from '../fakeData/users';
import { User, UserFullInfo, UserRole } from '../types/users';
import axiosClient, { Response } from '../utils/axios';
import { STORAGE_KEYS } from '../utils/constants';
export type UserLogin = Pick<User, 'email'> & { password: string };
export type UserInfo = Pick<UserFullInfo, 'email' | 'userName'>;

export async function login(user: UserLogin) {
  const data: Response<{
    accessToken?: string;
  }> = await axiosClient.post('/auth/login', user);
  if (data.accessToken) {
    localStorage.setItem(STORAGE_KEYS.accessToken, data.accessToken);
    localStorage.setItem('role', UserRole.Instructor);
  } else {
    throw new Error('User not found');
  }
}

export async function logout() {
  localStorage.removeItem(STORAGE_KEYS.accessToken);
  localStorage.removeItem('role');
}

export async function updateUser(info: UserInfo) {
  let currentUser = JSON.parse(
    localStorage.getItem(STORAGE_KEYS.accessToken) as string
  );
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

export async function getCurrentUser(): Promise<User> {
  const data: User = await axiosClient.get('/auth/me');

  return data;
}

export async function changeRole(role: UserRole) {
  localStorage.setItem('role', role);
}
