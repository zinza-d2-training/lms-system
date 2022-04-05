import {
    Box,
    Button,
    FormLabel,
    Stack,
    TextField,
    Typography, Link
} from '@mui/material';
import { height } from '@mui/system';
import React from 'react';
// import './Forgotpassword.scss'
import { Link as RouteLink } from 'react-router-dom';
import Header from '../Header/Header';



const Forgotpassword = () => {
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
                                    <Typography sx={{
                                        fontWeight: '800',
                                        color: 'black'
                                    }}><b>Reset password</b></Typography>
                                </Box>
                                <Box>
                                    <Typography mb={1}>Enter your username or email address and we'll email you instructions on how to reset your password</Typography>
                                    <TextField
                                        sx={{
                                            height: '10px',
                                            padding: 'none',
                                            marginBottom: '55px'
                                        }}
                                        classes={{
                                            root: '.custom-css'
                                        }}
                                        placeholder="Username or email"
                                        type="text" fullWidth />
                                </Box>
                            </Stack>

                            <Button
                                variant="contained"
                                sx={{
                                    height: '38px',
                                    backgroundColor: '#000FE6',
                                }}>
                                Send
                            </Button>
                            <Typography
                                variant="body2"
                                align="center"

                            >
                                <Link
                                    component={RouteLink}
                                    to={'/login-password'}
                                    sx={{
                                        textAlign: 'center',
                                    }}
                                >
                                    Log in
                                    <span
                                    >with your credentials</span>

                                </Link>
                            </Typography>

                        </Stack>
                    </FormLabel>
                </Box>
            </Box>
        </>
    )
}
export default Forgotpassword;