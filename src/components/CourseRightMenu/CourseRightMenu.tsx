import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GridOnIcon from '@mui/icons-material/GridOn';
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemButton,
  Typography
} from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  id: number;
}
const CourseRightMenu = ({ id }: Props) => {
  return (
    <Box sx={{ flex: 1, padding: '5px' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: '10px' }}>
            <GridOnIcon className="right-menu-icon" fontSize="large" />
            <Link
              component={RouterLink}
              to={`/courses/${id}`}
              underline="hover"
              color={'black'}>
              <Typography>Content</Typography>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: '10px' }}>
            <AccountCircleOutlinedIcon
              className="right-menu-icon"
              fontSize="large"
            />
            <Link
              component={RouterLink}
              to={`/courses/${id}/users`}
              underline="hover"
              color={'black'}>
              <Typography>User & Progress</Typography>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: '10px' }}>
            <FolderOutlinedIcon className="right-menu-icon" fontSize="large" />
            <Link
              component={RouterLink}
              to={`/courses/${id}/files`}
              underline="hover"
              color={'black'}>
              <Typography>Files</Typography>
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default CourseRightMenu;
