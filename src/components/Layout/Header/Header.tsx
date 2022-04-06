import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import {
  Box,
  Button,
  Container,
  Divider,
  FormControlLabel,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import { logout } from '../../../services/AuthService';
const Header = () => {
  const userContext = useContext(UserContext);
  const user = userContext.user;
  const [anchorUser, setAnchorUser] = useState<null | HTMLElement>(null);
  const [anchorMessage, setAnchorMessage] = useState<null | HTMLElement>(null);
  const [anchorHelp, setAnchorHelp] = useState<null | HTMLElement>(null);
  const openUser = Boolean(anchorUser);
  const openMessage = Boolean(anchorMessage);
  const openHelp = Boolean(anchorHelp);
  const [role, setRole] = React.useState('Instructor');
  const location = useLocation();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole((event.target as HTMLInputElement).value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorUser(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorUser(null);
    setAnchorMessage(null);
    setAnchorHelp(null);
  };

  const handleOnClick = () => {
    logout();
    window.location.replace(
      (location?.state as any)?.from ? (location?.state as any)?.from : '/'
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 2,
        background: 'white',
        borderBottom: '1px solid #e0e0e0'
      }}>
      <Container
        sx={{
          paddingTop: '10px',
          paddingBottom: '10px'
        }}>
        <Typography
          component={RouterLink}
          to={'/'}
          variant="h6"
          color="#fff"
          sx={{
            display: 'flex',
            alignItems: 'self-start',
            textDecoration: 'none'
          }}>
          <Box
            component="img"
            src="https://d3j0t7vrtr92dk.cloudfront.net/images/talent_bigger.png"
            alt=""
            sx={{
              maxWidth: 200,
              maxHeight: 36
            }}
          />
        </Typography>
      </Container>

      <Container
        sx={{
          paddingTop: '10px',
          paddingBottom: '10px',
          display: 'flex',
          justifyContent: 'space-around '
        }}>
        {user ? (
          <>
            <Stack>
              <Button
                id="user-button"
                aria-controls={openUser ? 'user-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openUser ? 'true' : undefined}
                onClick={handleClick}>
                User
              </Button>
              <Menu
                id="user-menu"
                anchorEl={anchorUser}
                open={openUser}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'user-button'
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    position: 'absolute',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      left: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0
                    }
                  }
                }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={role}
                  onChange={handleChange}
                  sx={{
                    paddingLeft: '15px'
                  }}>
                  <FormControlLabel
                    value="Instructor"
                    control={<Radio size="small" />}
                    label="Instructor"
                    onClick={handleClose}
                  />
                  <FormControlLabel
                    value="Learner"
                    control={<Radio size="small" />}
                    label="Learner"
                    onClick={handleClose}
                  />
                </RadioGroup>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ContactMailOutlinedIcon fontSize="small" /> {'\u00a0\u00a0'}
                  My Info
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <BookOutlinedIcon fontSize="small" /> {'\u00a0\u00a0'}My
                  Courses
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <WorkspacePremiumOutlinedIcon fontSize="small" />{' '}
                  {'\u00a0\u00a0'}My certifications
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ShowChartOutlinedIcon fontSize="small" /> {'\u00a0\u00a0'}My
                  progress
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <PeopleAltOutlinedIcon fontSize="small" /> {'\u00a0\u00a0'}My
                  groups
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <AccountTreeOutlinedIcon fontSize="small" /> {'\u00a0\u00a0'}
                  My branches
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <InsertDriveFileOutlinedIcon fontSize="small" />{' '}
                  {'\u00a0\u00a0'}My files
                </MenuItem>
              </Menu>
            </Stack>
            <Stack>
              <Button
                id="message-button"
                aria-controls={openMessage ? 'message-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMessage ? 'true' : undefined}
                onClick={(e) => {
                  setAnchorMessage(e.currentTarget);
                }}>
                Message
              </Button>
              <Menu
                id="message-menu"
                anchorEl={anchorMessage}
                open={openMessage}
                onClose={(e) => {
                  setAnchorMessage(null);
                }}
                MenuListProps={{
                  'aria-labelledby': 'message-button'
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      left: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0
                    }
                  }
                }}>
                <MenuItem onClick={handleClose}>Go to Inbox</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>No Message</MenuItem>
              </Menu>
            </Stack>
            <Stack>
              <Button
                id="help-button"
                aria-controls={openHelp ? 'help-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openHelp ? 'true' : undefined}
                onClick={(e) => {
                  setAnchorHelp(e.currentTarget);
                }}>
                Help
              </Button>
              <Menu
                id="help-menu"
                anchorEl={anchorHelp}
                open={openHelp}
                onClose={(e) => {
                  setAnchorHelp(null);
                }}
                MenuListProps={{
                  'aria-labelledby': 'help-button'
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      left: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0
                    }
                  }
                }}>
                <MenuItem onClick={handleClose}>Knowledge base</MenuItem>
                <MenuItem onClick={handleClose}>Tour</MenuItem>
                <MenuItem onClick={handleClose}>Videos</MenuItem>
                <MenuItem onClick={handleClose}>Contact support</MenuItem>
                <MenuItem onClick={handleClose}>Live support</MenuItem>
                <MenuItem onClick={handleClose}>Success manager</MenuItem>
              </Menu>
            </Stack>
            <Stack>
              <TextField placeholder={'search'} size="small" />
            </Stack>
            <Button
              onClick={handleOnClick}
              sx={{
                justifyContent: 'center',
                color: 'black'
              }}>
              <LogoutIcon />
            </Button>
          </>
        ) : (
          <></>
        )}
      </Container>
    </Box>
  );
};

export default Header;
