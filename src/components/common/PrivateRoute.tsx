import { FC, useContext } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Login from '../../pages/Login/Login';

const PrivateRoute: FC<
  RouteProps
> = ({ path, element, ...rest }) => {
  const userContext = useContext(UserContext);
  const user = userContext.user
  return (
    <Route
      path={path}
      element={!user ? <Login/> : element}
      {...rest}
    />
  );
};

export default PrivateRoute;
