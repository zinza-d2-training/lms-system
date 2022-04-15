// <ColorTabs />
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import GridOnIcon from '@mui/icons-material/GridOn';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Container, Tab } from '@mui/material';
import '../Courses/Courses.css';
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { TabCoursesUser } from './TabCoursesUser/TabCoursesUser';
import { TabEnrollUser } from './TabEnrollUser/TabEnrollUser';
export const ManagementUser = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Container className="main-container">
        <Box className="box-content-container" sx={{ minHeight: '500px' }}>
          <Box className="box-content-left">
            <Box className="box-content-left-container">
              <Box
                sx={{ width: '100%', typography: 'body1', fontSize: '13px' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                      sx={{ fontSize: '12px' }}
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      className="tab-option">
                      <Tab label="Course users" value="1" />
                      <Tab label="Enroll users" value="2" />
                    </TabList>
                  </Box>
                  <TabPanel value="1" className="tabManage-course">
                    <TabCoursesUser />
                  </TabPanel>
                  <TabPanel
                    value="2"
                    sx={{ padding: 0, marginTop: '12px', width: '98%' }}>
                    <TabEnrollUser />
                  </TabPanel>
                </TabContext>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box>
              <Box className="box-content-right-container-item">
                <Box className="item-left">
                  <PersonIcon className="right-menu-icon" fontSize="large" />
                </Box>
                <Box className="item-right">
                  <h5>USERS & PROGRESS</h5>
                  <p>1 instructor · 0 learners</p>
                </Box>
              </Box>

              <Box className="box-content-right-container-item">
                <Box className="item-left">
                  <FolderCopyIcon
                    className="right-menu-icon"
                    fontSize="large"
                  />
                </Box>
                <Box className="item-right">
                  <h5>FILES</h5>
                  <p>0 files</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
