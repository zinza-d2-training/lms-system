import { Box, Button, Typography } from '@mui/material';
import { makeValidate, TextField } from 'mui-rff';
import { useSnackbar } from 'notistack';
import React from 'react';
import { Form } from 'react-final-form';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { resetPassword } from '../../services/AuthService';
import Header from '../Layout/Header/Header';
import './ResetPassword.css';

interface ResetFormData {
  password?: string | null;
}

const schema: Yup.SchemaOf<ResetFormData> = Yup.object().shape({
  password: Yup.string().min(5).required()
});

const validate = makeValidate<ResetFormData>(schema);
const ResetPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get('token');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleSubmit = async (password: ResetFormData) => {
    try {
      if (searchParams) {
        const status = await resetPassword(password as string, searchParams);
        enqueueSnackbar(status === 200 ? 'success' : 'Url invalid', {
          variant: status === 200 ? 'success' : 'error'
        });
        if (status && status === 200) {
          navigate('/login');
        }
      }
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
          width: 1050,
          margin: '50px auto',
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
          borderRadius: '15px',
          background: 'white'
        }}>
        <Box
          component="form"
          sx={{
            justifyContent: 'center',
            width: '100%'
          }}>
          <Form<ResetFormData>
            onSubmit={handleSubmit}
            validate={validate}
            render={({ handleSubmit, invalid, submitting }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{
                      background: '#0084d6',
                      height: '46px'
                    }}></Box>

                  <Box
                    sx={{
                      border: '1px solid #cccaca'
                    }}>
                    <Typography
                      sx={{
                        marginLeft: '175px',
                        marginTop: '26px'
                      }}>
                      Please enter a new password for your account
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        borderBottom: '1px solid #eaeaea'
                      }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '16px',
                          fontWeight: 600,
                          mt: 3,
                          marginLeft: '80px',
                          marginRight: '22px'
                        }}>
                        PassWord
                      </Typography>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                      />
                    </Box>

                    <Button
                      disabled={invalid || submitting}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        height: '38px',
                        backgroundColor: '#000FE6',
                        width: '20%',
                        marginLeft: '175px'
                      }}>
                      RESET PASSWORD
                    </Button>
                  </Box>
                </form>
              );
            }}
          />
        </Box>
      </Box>
    </>
  );
};
export default ResetPassword;
