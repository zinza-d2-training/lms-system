import React from 'react';
import BreadCrumb from './BreadCrumb';
import { Container } from '@mui/material';

interface MainContentProps {
  children?: React.ReactNode;
}

const MainContent = (props: MainContentProps) => {
  const { children, ...other } = props;
  return (
    <Container
      {...other}
      sx={{
        borderRadius: '5px',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
      }}>
      <BreadCrumb />
      {children}
    </Container>
  );
};

export default MainContent;
