import { Box, Button } from '@mui/material';
import { makeValidate, TextField } from 'mui-rff';
import React from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Header from '../Header/Header';

interface ForgotFormData {
  email?: string | null;
}

const schema: Yup.SchemaOf<ForgotFormData> = Yup.object().shape({
  email: Yup.string().email().required()
});

const validate = makeValidate<ForgotFormData>(schema);
const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/');
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
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    sx={{
                      height: '10px',
                      padding: 'none',
                      marginBottom: '55px'
                    }}
                    classes={{
                      root: '.custom-css'
                    }}
                    placeholder="Username or email"
                  />

                  <Button
                    disabled={invalid || submitting}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      height: '38px',
                      backgroundColor: '#000FE6'
                    }}>
                    Send
                  </Button>
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
