import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import {
  Box,
  Button,
  Container,
  Link,
  TableContainer,
  TextField
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useContext, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import { deleteCourse } from '../../../services/CourseService';
import { UserRole } from '../../../types/users';
import { formatDateTime } from '../../../utils/datetime';
import { Pagination } from '../../Pagination';
import { useGetCourses } from '../hook';
import './ListCourses.css';
import { CustomizedMenus } from './MenuActions';

const ListCoursesRender = () => {
  const userContext = useContext(UserContext);
  const [filter, setFilter] = useState({
    page: 1,
    limit: 4,
    title: ''
  });
  const { courses } = useGetCourses({
    page: filter.page,
    limit: filter.limit,
    title: filter.title
  });

  console.log(courses);

  const handleDelete = async (id: number) => {
    await deleteCourse(id);
    window.location.reload();
  };
  return (
    <>
      <Container className="main-container">
        <Box className="box-content-container">
          <Box className="container-options">
            {userContext.role === UserRole.Instructor ? (
              <>
                <Box>
                  <Link
                    component={RouterLink}
                    to={'/courses/add'}
                    sx={{
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}>
                    <Button variant="contained">Add course</Button>
                  </Link>
                </Box>
                <Box
                  className="container-options-right"
                  sx={{
                    fontFamily: 'Arial, Helvetica, sans-serif '
                  }}>
                  <ReplyIcon className="icon-share" />
                  <p>View courses catalog</p>
                </Box>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            paddingBottom: '16px'
          }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, textAlign: 'center' }}
              size="small"
              aria-label="customized table">
              <TableHead className="table-head">
                <TableRow>
                  <TableCell>COURSES</TableCell>
                  <TableCell>CATEGORY</TableCell>
                  <TableCell align="right">LAST UPDATE ON</TableCell>
                  {userContext.role === UserRole.Instructor ? (
                    <TableCell align="right">OPTIONS</TableCell>
                  ) : (
                    <></>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {courses?.courses.map((course) => (
                  <TableRow
                    className="table-row-content"
                    key={course.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 }
                    }}>
                    <TableCell component="th" scope="row">
                      <Link
                        component={RouterLink}
                        to={`/courses/${course.id}/edit`}
                        underline="hover"
                        color="black">
                        {course.title}
                      </Link>
                    </TableCell>
                    <TableCell>Samples</TableCell>
                    <TableCell sx={{ paddingRight: '28px' }} align="right">
                      {course.updatedAt
                        ? formatDateTime(course.updatedAt)
                        : '-'}
                    </TableCell>
                    {userContext.role === UserRole.Instructor ? (
                      <TableCell sx={{ paddingRight: '28px' }} align="right">
                        <CustomizedMenus
                          items={[
                            {
                              to: `/courses/${course.id}/edit`,
                              label: 'Update',
                              icon: <EditIcon />
                            },
                            {
                              to: `#`,
                              label: 'Delete',
                              icon: <DeleteForeverIcon />,
                              onClick: () => handleDelete(course.id)
                            }
                          ]}
                        />
                      </TableCell>
                    ) : (
                      <></>
                    )}
                  </TableRow>
                ))}

                {courses?.learn.map((course) => (
                  <TableRow
                    className="table-row-content"
                    key={course.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 }
                    }}>
                    <TableCell component="th" scope="row">
                      <Link
                        component={RouterLink}
                        to={`/courses/${course.id}/edit`}
                        underline="hover"
                        color="black">
                        {course.title}
                      </Link>
                    </TableCell>
                    <TableCell>Samples</TableCell>
                    <TableCell sx={{ paddingRight: '28px' }} align="right">
                      {course.updatedAt
                        ? formatDateTime(course.updatedAt)
                        : '-'}
                    </TableCell>
                    {userContext.role === UserRole.Instructor ? (
                      <TableCell sx={{ paddingRight: '28px' }} align="right">
                        <CustomizedMenus
                          items={[
                            {
                              to: `/courses/${course.id}/edit`,
                              label: 'Update',
                              icon: <EditIcon />
                            },
                            {
                              to: `#`,
                              label: 'Delete',
                              icon: <DeleteForeverIcon />,
                              onClick: () => handleDelete(course.id)
                            }
                          ]}
                        />
                      </TableCell>
                    ) : (
                      <></>
                    )}
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
            <Box sx={{ marginBottom: '4px' }}>
              <Pagination
                totalField={courses?.count}
                limit={filter.limit}
                initalPage={filter.page}
                onNextPage={(page: number) => {
                  setFilter({
                    ...filter,
                    page: (page = page + 1)
                  });
                }}
                onPrevPage={(page: number) => {
                  setFilter({
                    ...filter,
                    page: (page = page - 1)
                  });
                }}
              />
            </Box>

            <Box className="box-container-footer-right">
              <SaveAltIcon />
              <FilterAltIcon />
              <TextField className="button-search" placeholder="Search" />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default ListCoursesRender;
