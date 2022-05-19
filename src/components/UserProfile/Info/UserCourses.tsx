import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
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
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import { UserRole } from '../../../types/users';
import { CustomizedMenus } from '../../Courses/ListCourses/MenuActions';
import { useCourseUser } from './hook';
import './StyleUserInfo.css';

export const UserCourses = () => {
  const { userId } = useParams() as { userId: string };
  const userContext = useContext(UserContext);
  const { coursesData } = useCourseUser(parseInt(userId));
  console.log(coursesData);
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
              <TableCell align="center">COMPLETION DATE</TableCell>
              <TableCell align="right">OPTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-sourses-user">
            {coursesData.map((course) => (
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
                    INSTRUCTOR
                  </Typography>
                  {/* {course.name.slice(course.name.lastIndexOf('.') + 1)} */}
                </TableCell>
                <TableCell align="center">{course.enrolledOn}</TableCell>
                <TableCell align="center">
                  {course.completionDate || '-'}
                </TableCell>
                <TableCell align="right">
                  <CustomizedMenus
                    items={
                      userContext.role === UserRole.Learner
                        ? [
                            {
                              to: `#`,
                              label: 'Uneroll',
                              icon: <RemoveRedEyeOutlinedIcon />
                            },
                            {
                              to: `/view/${course.courseId}`,
                              label: 'View',
                              icon: <FileDownloadOutlinedIcon />
                            }
                          ]
                        : [
                            {
                              to: `#`,
                              label: 'Delete',
                              icon: <RemoveRedEyeOutlinedIcon />
                            },
                            {
                              to: `/courses/${course.courseId}/edit`,
                              label: 'edit',
                              icon: <FileDownloadOutlinedIcon />
                            }
                          ]
                    }
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
