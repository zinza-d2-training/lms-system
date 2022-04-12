import React from 'react';
import { Button, Link } from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom';
const Courses = () => {
  return (
    <div>
      Courses
      <Button>
        <Link component={RouterLink} to={'add'}>
          Add
        </Link>
      </Button>
      <Outlet />
    </div>
  );
};

export default Courses;
