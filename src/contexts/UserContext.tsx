import React, { createContext, FC, useEffect, useState } from 'react';
import { getCurrentUser } from '../services/AuthService';
import { User, UserRole } from '../types/users';
import { STORAGE_KEYS } from '../utils/constants';

export type defaultUserContext = {
  user: Pick<User, 'id' | 'email' | 'userName'> | undefined;
  role: UserRole | undefined;
};

export const UserContext = createContext<defaultUserContext>({
  user: undefined,
  role: undefined
});

interface Props {
  children: React.ReactNode;
}

export const UserProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<Pick<User, 'id' | 'email' | 'userName'>>();
  const [role, setRole] = useState<UserRole>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        if (user) {
          setUser({
            id: user.id,
            email: user.email,
            userName: user.userName
          });
        }
      })
      .catch(() => {
        localStorage.removeItem(STORAGE_KEYS.accessToken);
      })
      .finally(() => setLoading(false));

    const localRole = localStorage.getItem('role');
    if (localRole) {
      setRole(localRole as UserRole);
    }

    return () => {};
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <UserContext.Provider value={{ user, role }}>
      {children}
    </UserContext.Provider>
  );
};
