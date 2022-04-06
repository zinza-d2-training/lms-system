import { User } from "../types/users";
import { Users } from '../fakeData/users';
import { pick } from "lodash";
export type UserLogin = Pick<User, 'email'> & { password: string };

const KEY_USER = 'user';

export async function login(user: UserLogin) {
	const found = Users.find(
		item => item.email === user.email && item.password === user.password
	);

	if (found) {
		localStorage.setItem(
			KEY_USER,
			JSON.stringify(pick(found, 'id', 'email'))
		);
	} else {
		throw new Error('User not found');
	}
}

export async function logout() {
	localStorage.removeItem(KEY_USER);
  localStorage.removeItem('role');
}

export function getCurrentUser() {
	return localStorage.getItem(KEY_USER);
}
