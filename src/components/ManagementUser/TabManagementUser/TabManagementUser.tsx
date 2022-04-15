import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import { TabCoursesUser } from '../TabCoursesUser/TabCoursesUser';
import { TabEnrollUser } from '../TabEnrollUser/TabEnrollUser';
import './TabManagementUser.css';
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', fontSize: '13px' }}>
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
  );
}
