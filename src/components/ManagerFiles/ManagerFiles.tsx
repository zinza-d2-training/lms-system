import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Link, Tab, TableContainer, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import CourseRightMenu from './../CourseRightMenu/CourseRightMenu';
import { useCourseFiles } from './hook';
import UploadFile from './UploadFile';
import UploadFileLink from './UploadFileLink';

const ManagerFiles = () => {
  const { id: courseId } = useParams() as { id: string };
  const id = parseInt(courseId);
  const { filesData, loading } = useCourseFiles(id);
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          flex: 3,
          borderRight: '1px solid #f3f3f3',
          flexDirection: 'row'
        }}>
        <Box>
          <Box sx={{ width: '100%', typography: 'body1', fontSize: '13px' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  sx={{ fontSize: '12px' }}
                  onChange={handleChange}
                  aria-label="lab API tabs example">
                  <Tab label="Course users" value="1" />
                  <Tab label="Enroll users" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <UploadFile />
              </TabPanel>
              <TabPanel value="2">
                <UploadFileLink />
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
        <Box sx={{ padding: '10px' }}>
          {loading ? (
            'loading'
          ) : (
            <TableContainer>
              <Table
                sx={{ minWidth: 650, textAlign: 'center' }}
                size="small"
                aria-label="customized table">
                <TableHead className="table-head">
                  <TableRow>
                    <TableCell align="left">NAME</TableCell>
                    <TableCell align="left">TYPE</TableCell>
                    <TableCell align="center">SIZE</TableCell>
                    <TableCell align="right">UPLOADED</TableCell>
                    <TableCell align="right">OPTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filesData.map((file) => (
                    <TableRow
                      className="table-row-content"
                      key={file.id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 }
                      }}>
                      <TableCell component="th" scope="row" align="left">
                        <Link
                          component={RouterLink}
                          to={`/courses/${id}/edit`}
                          underline="hover"
                          color="black">
                          {file.name}
                        </Link>
                      </TableCell>
                      <TableCell align="left">
                        {file.name.slice(file.name.lastIndexOf('.') + 1)}
                      </TableCell>
                      <TableCell align="center">{file.size}</TableCell>
                      <TableCell align="right">{file.created_At}</TableCell>
                      <TableCell align="right">
                        <MoreHorizOutlinedIcon />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <Box
            className="box-container-footer"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '16px'
            }}>
            <Box>
              <button>1 to 8 of 8</button>
            </Box>

            <Box className="box-container-footer-right">
              <SaveAltIcon />
              <FilterAltIcon />
              <TextField className="button-search" placeholder="Search" />
            </Box>
          </Box>
        </Box>
      </Box>
      <CourseRightMenu id={id}></CourseRightMenu>
    </Box>
  );
};

export default ManagerFiles;
