import { Box, Button, FormControlLabel, Link } from '@mui/material';
import { makeValidate, Checkboxes, TextField } from 'mui-rff';
import { Form } from 'react-final-form';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
import './Signup.css';
import { signUp, UserSignUp } from '../../services/AuthService';

interface SignupFormData {
  email?: string | null;
  password?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  userName?: string | null;
  check?: boolean | null;
}

const schema: Yup.SchemaOf<SignupFormData> = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  userName: Yup.string().required(),
  check: Yup.boolean()
    .oneOf([true], 'Please confirm your choice')
    .default(false)
});

const validate = makeValidate<SignupFormData>(schema);
const Signup = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (user: SignupFormData) => {
    try {
      await signUp(user as UserSignUp);
      enqueueSnackbar('Success!', {
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '8px'
        }}>
        <img
          height={28}
          src="https://d3j0t7vrtr92dk.cloudfront.net/images/logo.svg"
          alt=""
        />
        <br />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '38px',
          marginTop: '8px',
          color: '#216eb9',
          fontWeight: 300
        }}>
        Let's start, it's easy
      </Box>

      <Box
        className="signup-container-form"
        sx={{
          width: 500,
          margin: '50px auto',
          padding: 10,
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
          borderRadius: '5px',
          background: 'white'
        }}>
        <Box
          component="form"
          sx={{
            justifyContent: 'center',
            width: '100%',
            '@media(min-height: 900px)': {
              mt: '150px'
            },
            '@media(min-height: 1100px)': {
              mt: '25px'
            }
          }}>
          <Form<SignupFormData>
            onSubmit={handleSubmit}
            validate={validate}
            render={({ handleSubmit, invalid, submitting, errors, values }) => {
              return (
                <Box>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      className="Signup-input"
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
                      className="Signup-input"
                      margin="normal"
                      required
                      fullWidth
                      id="firstName"
                      label="firstName"
                      name="firstName"
                      autoComplete="firstName"
                    />
                    <TextField
                      className="Signup-input"
                      margin="normal"
                      required
                      fullWidth
                      id="lastName"
                      label="lastName"
                      name="lastName"
                      autoComplete="lastName"
                    />
                    <TextField
                      className="Signup-input"
                      margin="normal"
                      required
                      fullWidth
                      id="userName"
                      label="User Name"
                      name="userName"
                      autoComplete="userName"
                    />
                    <TextField
                      className="Signup-input"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <FormControlLabel
                      className="Signup-checkbox"
                      control={
                        <Checkboxes
                          required
                          id="check"
                          name="check"
                          data={{
                            label: 'I accept the Terms Service',
                            value: 'true'
                          }}
                        />
                      }
                      label=""
                    />
                    <Button
                      className="Signup-buttonSubmit"
                      disabled={invalid || submitting}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}>
                      Create Account
                    </Button>

                    <Box className="signup-text-end">
                      <p>
                        Already have an account?{' '}
                        <Link
                          className="signup-text-end-link"
                          underline="none"
                          to={'/login'}
                          component={RouterLink}>
                          Login
                        </Link>
                      </p>
                    </Box>
                  </form>
                </Box>
              );
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Signup;
