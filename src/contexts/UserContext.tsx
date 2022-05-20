import React, { createContext, FC, useEffect, useState } from 'react';
import { getCurrentUser } from '../services/AuthService';
import { User, UserRole } from '../types/users';

export type defaultUserContext = {
  user: Pick<User, 'id' | 'email'> | undefined;
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
  const [user, setUser] = useState<Pick<User, 'id' | 'email'>>();
  const [role, setRole] = useState<UserRole>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        setUser(user);
      }
    });
    const localRole = localStorage.getItem('role');
    if (localRole) {
      setRole(localRole as UserRole);
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <UserContext.Provider value={{ user, role }}>
      {children}
    </UserContext.Provider>
  );
};
