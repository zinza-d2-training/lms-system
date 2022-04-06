import { ClassNames } from '@emotion/react';
import {
    Box, Button, FormControlLabel, Link
} from '@mui/material';
import { makeValidate, Checkboxes, TextField } from 'mui-rff';
import { Form } from 'react-final-form';
import * as Yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
import './Signup.css';
//import { UserRole } from '../../types/users';

interface SignupFormData {
    email?: string | null;
    password?: string | null;
    name?: string | null;
    userName?: string | null;
    check?: boolean | null;
}

const schema: Yup.SchemaOf<SignupFormData> = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(5).required(),
    name: Yup.string().required(),
    userName: Yup.string().required(),
    check: Yup.boolean().oneOf([true], 'Please confirm your choice').default(false)

});

const validate = makeValidate<SignupFormData>(schema)
const Signup = () => {
    const handleSubmit = async (user: SignupFormData) => {
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '8px',
                }}
            >
                <img height={28} src="https://d3j0t7vrtr92dk.cloudfront.net/images/logo.svg" alt="" />
                <br />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '38px',
                    marginTop: '8px',
                    color: '#216eb9',
                    fontWeight: 300,
                }}
            >Let's start, it's easy</Box>

            <Box
                className='signup-container-form'
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
                        '@media(min-height: 768px)': {
                            mt: '150px'
                        },
                        '@media(min-height: 920px)': {
                            mt: '25px'
                        }
                    }}>
                    <Form<SignupFormData>
                        onSubmit={handleSubmit}
                        validate={validate}
                        render={({ handleSubmit, invalid, submitting, errors, values }) => {
                            return (
                                <Box

                                >
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            className='Signup-input'
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"                                            
                                        />

                                        <TextField
                                            className='Signup-input'
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            name="name"
                                            autoComplete="name"
                                        />

                                        <TextField
                                            className='Signup-input'
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="userName"
                                            label="User Name"
                                            name="userName"
                                            autoComplete="userName"
                                        />
                                        <TextField
                                            className='Signup-input'
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
                                            className='Signup-checkbox'
                                            control={
                                                < Checkboxes
                                                    required
                                                    id="check"
                                                    name="check"
                                                    data={{ label: 'I accept the Terms Service', value: 'true' }}
                                                />} label="" />
                                        <Button
                                            className='Signup-buttonSubmit'
                                            disabled={invalid || submitting}
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Create Account
                                        </Button>

                                        <Box
                                            className='signup-text-end'
                                        >
                                            <p>Already have an account? <Link className='signup-text-end-link' underline='none' to={'/login'} component={RouterLink}>Login</Link>                                            
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