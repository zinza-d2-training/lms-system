import { FC, useContext } from 'react';
import { Navigate, RouteProps, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';


const PrivateRoute: FC<
  RouteProps & {
    children: JSX.Element
  }
> = ({ children }) => {
  const userContext = useContext(UserContext);
  const user = userContext.user
  const location = useLocation()
  if(!user) return <Navigate to="/login" state={{ from: location }} replace />
  return children
};

export default PrivateRoute;
