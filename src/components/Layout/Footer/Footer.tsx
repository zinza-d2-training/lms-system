import { Typography, Container } from '@mui/material';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Footer = () => {
  return (
    <Container
      sx={{
        padding: '5px',
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
      <LockOutlinedIcon
        fontSize="small"
        sx={{
          color: 'white',
          background: 'black',
          borderRadius: '50%'
        }}
      />
      <Typography>TalentLMS</Typography>
    </Container>
  );
};

export default Footer;
