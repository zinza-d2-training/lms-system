import { FC, useContext } from 'react';
import { Navigate, RouteProps, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { UserRole } from '../../types/users';

const PrivateRoute: FC<
  RouteProps & {
    children: JSX.Element;
    roles: UserRole[];
  }
> = ({ children, roles }) => {
  const userContext = useContext(UserContext);
  const location = useLocation();
  if (!userContext.user)
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  if (!userContext.role || !roles.includes(userContext.role))
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  return children;
};

export default PrivateRoute;
