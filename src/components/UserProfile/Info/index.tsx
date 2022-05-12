import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { UserCourses } from './UserCourses';
import { UserFiles } from './UserFiles';
import UserInfor from './UserInfor';

export const UserInfoIndex = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const { id: courseId } = useParams() as { id: string };
  const id = parseInt(courseId);
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
      <Box sx={{ minHeight: '500px' }}>
        <Box sx={{ width: '100%', typography: 'body1', fontSize: '13px' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                sx={{ fontSize: '12px' }}
                onChange={handleChange}
                aria-label="lab API tabs example"
                className="tab-option">
                <Tab label="Info" value="1" />
                <Tab label="Courses" value="2" />
                <Tab label="File" value="3" />
              </TabList>
            </Box>

            <TabPanel
              value="1"
              className="tabManage-course"
              sx={{ padding: 0, marginTop: '12px', width: '98%' }}>
              {/* <TabCoursesUser /> */}
              <UserInfor />
            </TabPanel>
            <TabPanel
              value="2"
              sx={{ padding: 0, marginTop: '12px', width: '98%' }}>
              <UserCourses />
            </TabPanel>
            <TabPanel
              value="3"
              sx={{ padding: 0, marginTop: '12px', width: '98%' }}>
              <UserFiles />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </>
  );
};
