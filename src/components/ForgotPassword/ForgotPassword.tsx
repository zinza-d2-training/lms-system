import { Box, Button, Link, Typography } from '@mui/material';
import { makeValidate, TextField } from 'mui-rff';
import { useSnackbar } from 'notistack';
import React from 'react';
import { Form } from 'react-final-form';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { forgot } from '../../services/AuthService';
import Header from '../Layout/Header/Header';
interface ForgotFormData {
  email?: string | null;
}

const schema: Yup.SchemaOf<ForgotFormData> = Yup.object().shape({
  email: Yup.string().email().required()
});

const validate = makeValidate<ForgotFormData>(schema);
const ForgotPassword = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (email: ForgotFormData) => {
    try {
      await forgot(email as string);
      enqueueSnackbar('Email has been send, check your inbox!', {
        variant: 'success'
      });
    } catch (error) {
      enqueueSnackbar(String(error), {
        variant: 'error'
      });
    }
  };

  return (
    <>
      <Header />
      <Box
        className=""
        sx={{
          width: 500,
          margin: '50px auto',
          padding: 10,
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
          border: '1px solid #cccaca',
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
              mt: '25px'
            }
          }}>
          <Form<ForgotFormData>
            onSubmit={handleSubmit}
            validate={validate}
            render={({ handleSubmit, invalid, submitting }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Box>
                    <Box className="forgot-box-title">Reset Password</Box>
                    <Box className="forgot-box-des">
                      Enter your username or email address and we'll email you
                      intructions on how to reset <br /> your password
                    </Box>
                  </Box>
                  <TextField
                    className="forgot-input"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Username or email"
                    name="email"
                    autoComplete="email"
                    sx={{
                      height: '1',
                      padding: 'none',
                      marginBottom: '55px'
                    }}
                    classes={{
                      root: '.custom-css'
                    }}
                  />

                  <Button
                    className="forgotpass-button"
                    disabled={invalid || submitting}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 5,
                      textTransform: 'capitalize',
                      backgroundImage: '#000FE6',
                      height: '38px'
                    }}>
                    Send
                  </Button>

                  <Typography sx={{ textAlign: 'center' }}>
                    <Link underline="none" to={'/login'} component={RouterLink}>
                      Login
                    </Link>{' '}
                    with your credentials
                  </Typography>
                </form>
              );
            }}
          />
        </Box>
      </Box>
    </>
  );
};
export default ForgotPassword;
