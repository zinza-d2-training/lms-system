import {
  Box,
  Button,
  ButtonGroup,
  FormControlLabel,
  Typography
} from '@mui/material';
import { Checkboxes, makeValidate, TextField } from 'mui-rff';
import { useEffect, useMemo, useState } from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { getUserInfo } from '../../../services/ContentService';
import { UserFullInfo } from '../../../types/users';
import { ImageField } from '../../common/ImageField';
import './StyleUserInfo.css';
type UserInfo = {
  email?: string;
  password?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  bio?: string;
};
const schema: Yup.SchemaOf<UserInfo> = Yup.object().shape({
  email: Yup.string().email().required(),
  userName: Yup.string().required(),
  password: Yup.string(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  avatar: Yup.mixed().notRequired(),
  bio: Yup.string()
});

const validate = makeValidate(schema);

const useUserInfo = (userId: number) => {
  const [userInfo, setUserInfo] = useState<UserFullInfo | undefined>();

  useEffect(() => {
    const getContentInfo = async (userId: number) => {
      if (userId) {
        const data = await getUserInfo(userId);
        setUserInfo(data);
      }
    };

    getContentInfo(userId);

    return () => {};
  }, [userId]);

  return {
    userInfo
  };
};

const UserInfor = () => {
  const handleSubmit = async (user: UserInfo) => {
    console.log(user);
  };
  const { userId } = useParams() as { userId: string };
  const { userInfo } = useUserInfo(parseInt(userId));

  const initialValues = useMemo<UserInfo>(() => {
    return {
      email: userInfo?.email || '',
      password: '',
      userName: userInfo?.userName || '',
      firstName: userInfo?.firstName || '',
      lastName: userInfo?.lastName || '',
      avatar: userInfo?.avatar,
      bio: userInfo?.bio || ''
    };
  }, [
    userInfo?.avatar,
    userInfo?.bio,
    userInfo?.email,
    userInfo?.firstName,
    userInfo?.lastName,
    userInfo?.userName
  ]);
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box
          className="signup-container-form"
          sx={{
            width: 600,
            margin: '50px auto',
            padding: 10,
            display: 'flex',
            justifyContent: 'start',
            flex: 1,
            borderRadius: '5px',
            background: 'white',
            flexBasis: '50%'
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
            <Form<UserInfo>
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validate={validate}
              render={({
                handleSubmit,
                invalid,
                submitting,
                errors,
                values
              }) => {
                return (
                  <Box className="form-infoUser-item">
                    <form onSubmit={handleSubmit}>
                      <Box sx={{ display: 'flex' }}>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Typography className="label-form">
                              First name
                            </Typography>
                            <TextField
                              size="small"
                              className="input-name textfield-info-user"
                              name="firstName"
                            />
                          </Box>

                          <Box
                            sx={{
                              display: 'flex',
                              mt: 3,
                              justifyContent: 'end'
                            }}>
                            <Typography className="label-form">
                              Last name
                            </Typography>
                            <TextField
                              size="small"
                              className="input-name textfield-info-user"
                              name="lastName"
                            />
                          </Box>

                          <Box
                            sx={{
                              display: 'flex',
                              mt: 3,
                              justifyContent: 'end'
                            }}>
                            <Typography className="label-form">
                              Email address
                            </Typography>
                            <TextField
                              size="small"
                              className="input-name textfield-info-user"
                              name="email"
                            />
                          </Box>

                          <Box
                            sx={{
                              display: 'flex',
                              mt: 3,
                              justifyContent: 'end'
                            }}>
                            <Typography className="label-form">
                              Username
                            </Typography>
                            <TextField
                              size="small"
                              className="input-name textfield-info-user"
                              name="userName"
                              type="text"
                              autoComplete="current-password"
                            />
                          </Box>

                          <Box
                            sx={{
                              display: 'flex',
                              mt: 3,
                              justifyContent: 'end'
                            }}>
                            <Typography className="label-form">
                              Password
                            </Typography>
                            <TextField
                              size="small"
                              className="input-name textfield-info-user"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                            />
                          </Box>

                          <Box
                            sx={{
                              display: 'flex',
                              mt: 3,
                              justifyContent: 'end'
                            }}>
                            <Typography className="label-form">Bio</Typography>
                            <TextField
                              multiline
                              fullWidth
                              className="input-name textfield-info-user"
                              name="bio"
                              type="text"
                              rows={3}
                              autoComplete="current-password"
                            />
                          </Box>

                          <Box sx={{ marginLeft: '225px' }}>
                            <FormControlLabel
                              className="Signup-checkbox"
                              sx={{ mt: 5 }}
                              control={
                                <Checkboxes
                                  id="check"
                                  name="check"
                                  data={{
                                    label: 'Exclude from emails ',
                                    value: 'true'
                                  }}
                                />
                              }
                              label=""
                            />
                            <Button
                              className="Signup-buttonSubmit"
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ width: '140px', mt: 2 }}>
                              Update User
                            </Button>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            flex: 1
                          }}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'end',
                              alignItems: 'center'
                            }}>
                            <ImageField
                              name="avatar"
                              initPreview={
                                initialValues && initialValues.avatar
                              }
                            />
                          </Box>
                        </Box>
                      </Box>
                    </form>
                  </Box>
                );
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserInfor;
