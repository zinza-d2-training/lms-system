import {
  Box,
  Button,
  FormLabel,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Login = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: 500,
          margin: '50px auto',
          padding: 10,
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
          border: '1px solid ',
          borderRadius: '5px',
          background: 'white'
        }}>
        <Box
          component="form"
          sx={{
            justifyContent: 'center',
            width: '100%',
            '@media(min-height: 768px)': {
              mt: '150px'
            },
            '@media(min-height: 920px)': {
              mt: '25vh'
            }
          }}>
          <FormLabel>
            <Stack spacing={2}>
              <Stack spacing={2}>
                <Box>
                  <Typography mb={1}>Username or email</Typography>
                  <TextField fullWidth />
                </Box>
                <Box>
                  <Typography mb={1}>Password</Typography>
                  <TextField type="password" fullWidth/>
                </Box>
              </Stack>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}>
              </Box>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  height: '50px',
                  backgroundColor: '#000FE6'
                }}>
                Login
              </Button>
              <Typography
                  variant="body2"
                  align="right"
                  sx={{ textDecoration: 'none' }}>
                  For got &nbsp;
                  <Link to={'/reset-password'}>
                    your password?
                  </Link>
                </Typography>
            </Stack>
          </FormLabel>
        </Box>
      </Box>
    </>
  );
};

export default Login;
