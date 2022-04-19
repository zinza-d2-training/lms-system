import AddIcon from '@mui/icons-material/Add';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Link } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import '../MenuRight/StyleMenu.css';
import { Survey } from '../Survey';
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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
        minHeight: '550px'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%'
        }}>
        <Box
          sx={{
            flexBasis: '75%',
            borderRight: '1px solid #ccc'
          }}>
          <TabPanel value={value} index={0}>
            <Survey />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginRight: '14px'
                }}>
                <input placeholder="Name Survey " className="input-survey" />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  backgroundColor: '#f5f5f5',
                  height: '45px',
                  mt: 2
                }}
                className="Text-question-order">
                <b>Please add some questions to the survey first</b>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginRight: '14px'
                }}>
                <input placeholder="Name Survey " className="input-survey" />
              </Box>

              <Box
                sx={{
                  width: '100%',
                  backgroundColor: '#f5f5f5',
                  minHeight: '245px',
                  mt: 2,
                  paddingTop: '4px'
                }}
                className="Text-question-order">
                <Box
                  className="container-option-ckb"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '22px',
                    marginTop: '12px',
                    mb: '4px'
                  }}>
                  <input type="checkbox" />
                  <p>Show answers after completion</p>
                </Box>

                <Box
                  className="Text-question-order"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '22px',
                  }}>
                  <input type="checkbox" />
                  <p>Do not continue until an answer is chosen</p>
                </Box>

                <textarea
                  className="textarea-input"
                  placeholder="Add a survey description up to 800 characters"
                />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item 4
          </TabPanel>
        </Box>

        <Box
          sx={{
            flexBasis: '25%',
            borderRight: 'none',
            justifyContent: 'start'
          }}
          className="menu-right">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example">
            <Tab
              icon={<CheckBoxIcon />}
              iconPosition="start"
              label="SELECT QUESTIONS"
              {...a11yProps(0)}
            />
            <Tab
              icon={<ImportExportIcon />}
              iconPosition="start"
              label="SET QUESTION ORDER"
              {...a11yProps(1)}
            />
            <Tab
              className="line-option"
              icon={<SettingsIcon />}
              iconPosition="start"
              label="SELECT QUESTIONS"
              {...a11yProps(2)}
            />
          </Tabs>
          <Box className="box-content-right-container-item icon-main">
            <Box className="item-left icon-main-left">
              <AddIcon />
            </Box>
            <Box
              className="item-right icon-main-right"
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}>
              <h5>Add question</h5>
              <Link underline="hover">Multiple choice</Link>
              <Link underline="hover">Free text</Link>
              <Link underline="hover">Likert scale</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
