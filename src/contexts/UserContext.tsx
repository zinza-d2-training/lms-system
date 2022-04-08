import { createContext, FC, useEffect, useState } from 'react';
import { getCurrentUser } from '../services/AuthService';
import { User, UserRole } from '../types/users';

export type defaultUserContext = {
  user: Pick<User, 'id' | 'email' | 'role'> | undefined;
};

export const UserContext = createContext<defaultUserContext>({
  user: undefined
});

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<Pick<User, 'id' | 'email' | 'role'>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [role, setRole] = useState<UserRole | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (getCurrentUser()) {
      setUser(JSON.parse(getCurrentUser() as string));
      //setRole(JSON.parse(localStorage.getItem('role') as string));
    }
    // if (localStorage.getItem('role')) {
    //
    // }
    //  else {
    //   setRole(UserRole.Instructor);
    //   localStorage.setItem('role', UserRole.Instructor);
    // }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout();
  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
