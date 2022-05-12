import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import './StyleUserInfo.css';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../../../fakeData/courses';
import { useCourseData } from '../../Courses/hook';
import { CustomizedMenus } from '../../Courses/ListCourses/MenuActions';

export const UserCourses = () => {
  return (
    <Box sx={{ padding: '10px' }}>
      <TableContainer>
        <Table
          sx={{ minWidth: 650, textAlign: 'center', fontSize: '12px' }}
          size="small"
          aria-label="customized table">
          <TableHead className="table-head">
            <TableRow>
              <TableCell align="left">COURSE</TableCell>
              <TableCell align="center">ROLE</TableCell>
              <TableCell align="center">ENROLL</TableCell>
              <TableCell align="center">UPLOADED</TableCell>
              <TableCell align="right">OPTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-sourses-user">
            {courses.map((course) => (
              <TableRow
                className="table-row-content "
                key={course.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 }
                }}>
                <TableCell component="th" scope="row" align="left">
                  <Typography>{course.title}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    sx={{
                      backgroundColor: '#faa937',
                      textAlign: 'center',
                      color: '#ffffff',
                      fontSize: '12px',
                      borderRadius: '5px',
                      padding: '1px 20px',
                      marginRight: '20px',
                      textTransform: 'uppercase'
                    }}>
                    {course.role}
                  </Typography>
                  {/* {course.name.slice(course.name.lastIndexOf('.') + 1)} */}
                </TableCell>
                <TableCell align="center">{course.timeUpdate}</TableCell>
                <TableCell align="center">
                  {course.timeCompletion || '-'}
                </TableCell>
                <TableCell align="right">
                  <CustomizedMenus
                    items={[
                      {
                        to: `#`,
                        label: 'Preview',
                        icon: <RemoveRedEyeOutlinedIcon />
                      },
                      {
                        to: `#`,
                        label: 'Download',
                        icon: <FileDownloadOutlinedIcon />
                      },
                      {
                        to: `#`,
                        label: 'Edit',
                        icon: <ModeEditOutlinedIcon />
                      },
                      {
                        to: `#`,
                        label: 'Delete',
                        icon: <ClearOutlinedIcon />
                      }
                    ]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
  );
};
