import { Box, Button, Link, Typography } from '@mui/material';
import { makeValidate, TextField } from 'mui-rff';
import { useContext, useEffect } from 'react';
import { Form } from 'react-final-form';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { UserContext } from '../../contexts/UserContext';
import { login } from '../../services/AuthService';
import Header from '../Layout/Header/Header';

interface LoginFormData {
  email?: string | null;
  password?: string | null;
}

const schema: Yup.SchemaOf<LoginFormData> = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).required()
});

const validate = makeValidate<LoginFormData>(schema);
const Login = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const location = useLocation();
  useEffect(() => {
    if (userContext.user) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = async (user: LoginFormData) => {
    if (user.email && user.password) {
      try {
        await login({
          email: user.email,
          password: user.password
        });
        window.location.replace(
          (location?.state as any)?.from ? (location?.state as any)?.from : '/'
        );
      } catch (e) {
        alert(e);
      }
    }
  };
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
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
          borderRadius: '5px',
          background: 'white'
        }}>
        <Box
          component="form"
          sx={{
            justifyContent: 'center',
            width: '100%',
            mt: '25px'
          }}>
          <Form<LoginFormData>
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
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    disabled={invalid || submitting}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}>
                    Login
                  </Button>
                  <Typography sx={{ textAlign: 'center' }}>
                    Forgot your <Link underline='none' to={'/forgot'} component={RouterLink}>password?</Link>
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

export default Login;
