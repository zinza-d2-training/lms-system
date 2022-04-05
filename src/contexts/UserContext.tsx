import { createContext, FC, useEffect, useState }  from 'react';
import { User } from '../types/users';



export type defaultUserContext = {
  user: Pick<User, 'id' | 'email' | 'role'> | undefined
}


export const UserContext = createContext<defaultUserContext>({
  user: undefined
});

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<
  Pick<User, 'id' | 'email' | 'role'> | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user') as string))
    }
    setTimeout(() => {
			setLoading(false);
		}, 1000)

    return () => clearTimeout()
  }, [])
  return(
    loading ? (
      <div>Loading...</div>
    ) : (
      <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
    )
  )
}
