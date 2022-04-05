import {
  Box, Button
} from '@mui/material';
import * as Yup from 'yup';
import Header from '../../components/Header/Header';
import { makeValidate, TextField } from 'mui-rff';
import { Form } from 'react-final-form';
//import { UserRole } from '../../types/users';
import { login } from '../../services/AuthService';

interface LoginFormData {
	email?: string | null;
	password?: string | null;
}

const schema: Yup.SchemaOf<LoginFormData> = Yup.object().shape({
	email: Yup.string().email().required(),
	password: Yup.string().min(5).required()
});

const validate = makeValidate<LoginFormData>(schema)
const Login = () => {
  const handleSubmit = async (user: LoginFormData) => {
		if (user.email && user.password) {
			try {
				await login({
					email: user.email,
					password: user.password
				});

				//const currentUser = JSON.parse(getCurrentUser() as string);
				const path = '/';
				window.location.replace(path);
			} catch (e) {
				alert(e);
			}
		}
	}
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
          border: '1px solid #701515',
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
                    autoFocus
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
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Login
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

export default Login;
