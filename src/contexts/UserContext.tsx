import { createContext, FC, useEffect, useState } from 'react';
import { getCurrentUser } from '../services/AuthService';
import { User, UserRole } from '../types/users';

export type defaultUserContext = {
  user: Pick<User, 'id' | 'email'> | undefined;
};

export const UserContext = createContext<defaultUserContext>({
  user: undefined
});

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<Pick<User, 'id' | 'email'>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [role, setRole] = useState<UserRole | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (getCurrentUser()) {
      setUser(JSON.parse(getCurrentUser() as string));
      setRole(UserRole.Instructor)
      localStorage.setItem('role', UserRole.Instructor)
    }
      // if (localStorage.getItem('role')) {
      //   setRole(JSON.parse(localStorage.getItem('role') as string));
      // }
      //  else {
      //   setRole(UserRole.Instructor);
      //   localStorage.setItem('role', UserRole.Instructor);
      // }
    setTimeout(() => {
      setLoading(false);
    }, 1000);

  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
