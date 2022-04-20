import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyEditer from '../../../MyEditer/MyEditer';
import '../TabBasicContent/StyleTabBasicContent.css';
// import DropDown from '../TabBasicContent/DropDown';
import { DropDown } from './DropDown';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function tickID(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function TabBasicContent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            borderTop: '1px solid #eeeeee',
            borderBottom: '1px solid #ffffff',
            mt: 2,
            alignItems: 'center',
            paddingTop: '14px'
          }}>
          <Box
            sx={{
              marginLeft: '32px',
              fontSize: '14px'
            }}>
            How to complete it{' '}
          </Box>
          <Tabs
            sx={{
              marginLeft: '188px',
              marginTop: '-35px'
            }}
            value={value}
            onChange={handleChange}
            className="container-tab"
            aria-label="basic tabs example">
            <Tab
              className="textTransform"
              label="With a checkbox"
              {...tickID(0)}
            />
            <Tab
              className="textTransform"
              label="With a question"
              {...tickID(1)}
            />
            <Tab
              className="textTransform"
              label="After a period of time"
              {...tickID(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MyEditer />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{ display: 'flex' }}>
            <p className="question-select">Select a question</p>
            <DropDown />
          </Box>
          <MyEditer />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box sx={{ display: 'flex' }}>
            <label className="label-after-of-time font-size-14">
              Time limit
            </label>
            <input placeholder="Seconds" className="input-after-of-time" />
          </Box>
          <MyEditer />
        </TabPanel>
      </Box>
    </>
  );
}
