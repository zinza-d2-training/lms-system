import { Box, Button, Container, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './ListCourses.css';
import Header from '../../Layout/Header/Header';
import MainContent from '../../Layout/Content/MainContent';
// import { ListCourses } from '../../../fakeData/courses';
import { ListCourses } from '../../../fakeData/courses';
const ListCoursesRender = () => {
  // console.log(ListCourses);

  return (
    <>
      <Header />
      <MainContent>
        <Container className="main-container">
          <Box className="box-content-container">
            <Box className="container-options">
              <Box>
                <Button variant="contained">Add course</Button>
              </Box>
              <Box>
                <p>View courses catalog</p>
              </Box>
            </Box>
          </Box>
          <Box>
            {/* <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>COURSES</TableCell>
                    <TableCell align="right">CATEGORY</TableCell>
                    <TableCell align="right">LAST UPDATE ON</TableCell>
                    <TableCell align="right">OPTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ListCourses.map((course) => (
                    <TableRow
                      key={course.id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 }
                      }}>
                      <TableCell component="th" scope="row">
                        {course.title}
                      </TableCell>
                      <TableCell align="right">{course.category}</TableCell>
                      <TableCell align="right">{course.timeUpdate}</TableCell>
                      <TableCell align="right">icon</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer> */}

            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>COURSES</TableCell>
                    <TableCell align="right">CATEGORY</TableCell>
                    <TableCell align="right">LAST UPDATE ON</TableCell>
                    <TableCell align="right">OPTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ListCourses.map((course) => (
                    <TableRow
                      key={course.id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 }
                      }}>
                      <TableCell component="th" scope="row">
                        {course.title}
                      </TableCell>
                      <TableCell align="right">{course.category}</TableCell>
                      <TableCell align="right">{course.timeUpdate}</TableCell>
                      <TableCell align="right">icon</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </MainContent>
    </>
  );
};

export default ListCoursesRender;
