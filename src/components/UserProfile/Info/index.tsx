import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserCourses } from './UserCourses';
import { UserFiles } from './UserFiles';
import UserInfor from './UserInfor';

export const UserInfoIndex = () => {
  const { tab } = useParams() as { tab: string };
  const [value, setValue] = React.useState(tab);
  useEffect(() => {
    setValue(tab);
  }, [tab]);
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
                <Tab label="Info" value="info" />
                <Tab label="Courses" value="courses" />
                <Tab label="File" value="files" />
              </TabList>
            </Box>

            <TabPanel
              value="info"
              className="tabManage-course"
              sx={{ padding: 0, marginTop: '12px', width: '98%' }}>
              <UserInfor />
            </TabPanel>
            <TabPanel
              value="courses"
              sx={{ padding: 0, marginTop: '12px', width: '98%' }}>
              <UserCourses />
            </TabPanel>
            <TabPanel
              value="files"
              sx={{ padding: 0, marginTop: '12px', width: '98%' }}>
              <UserFiles />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </>
  );
};
