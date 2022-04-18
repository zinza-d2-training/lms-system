// <ColorTabs />
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Tab } from '@mui/material';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import CourseRightMenu from '../CourseRightMenu/CourseRightMenu';
// import '../Courses/Courses.css';
import { TabCoursesUser } from './TabCoursesUser/TabCoursesUser';
import { TabEnrollUser } from './TabEnrollUser/TabEnrollUser';
export const ManagementUser = () => {
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
                  <TabPanel
                    value="1"
                    className="tabManage-course"
                    sx={{ padding: 0, marginTop: '12px', width: '98%' }}>
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
          <CourseRightMenu id={id} />
        </Box>
      </Container>
    </>
  );
};
