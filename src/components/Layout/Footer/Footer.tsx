import { Typography, Box } from '@mui/material';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Footer = () => {
  return (
    <Box
      sx={{
        padding:'5px',
        display:'flex',
        justifyContent: 'flex-end'
      }}>
      <LockOutlinedIcon sx={{
        color:'white',
        background:'black',
        borderRadius:'50%'
      }} />
      <Typography>TalentLMS</Typography>
    </Box>
  );
};

export default Footer;
