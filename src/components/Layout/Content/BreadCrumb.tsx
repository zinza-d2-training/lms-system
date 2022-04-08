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
  const pathItem = location.pathname.split('/');
  pathItem.shift();

  return (
    <Box
      role='presentation'
      onClick={handleClick}
      sx={{
        borderTopLeftRadius:'5px',
        borderTopRightRadius:'5px',
        padding: '15px',
        width:'100%',
        background: '#0084D6'
      }}>
      <Breadcrumbs aria-label='breadcrumb' color='#FFFFFF'>
        <Link underline='hover' color='inherit' to={'/'} component={RouterLink}>
          Home
        </Link>
        {pathItem.map((item) => (
          <Link
            underline='hover'
            color='inherit'
            to={`/${item}`}
            component={RouterLink}>
            {item}
          </Link>
        ))}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumb;
