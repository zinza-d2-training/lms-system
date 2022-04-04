import { AuthActionType } from "./types";

type AuthAction = { type: AuthActionType; payload: string }

export interface AuthState {

}

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } = AuthActionType
