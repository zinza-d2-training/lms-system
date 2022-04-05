import { Typography } from '@mui/material';
import { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { User, UserRole } from '../../types/users';

const PrivateRoute: FC<
  RouteProps & {
    userRoles: UserRole[];
  }
> = ({ path, userRoles = [UserRole.Learner], ...rest }) => {
  const user = localStorage.getItem('user')
    ? (JSON.parse(localStorage.getItem('user')!) as Pick<
        User,
        'id' | 'email' | 'role'
      >)
    : undefined;
  if (!user) {
    return <Route path="/login"/>;
  }

  if (userRoles.includes(user.role)) {
    return <Route path={path} {...rest}/>;
  } else {
    return <Typography variant="h3">you have no permission</Typography>;
  }
};

export default PrivateRoute;
