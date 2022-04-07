import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

const BreadCrumb = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  return (
    <Box
      role='presentation'
      onClick={handleClick}
      sx={{
        background: '#0084D6',
        color: '#FFFFFF'
      }}>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' to={'/'} component={RouterLink}>
          Home
        </Link>
        <Link
          underline='none'
          color='inherit'
          to={`/${path}`}
          component={RouterLink}>
          {path}
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumb;
