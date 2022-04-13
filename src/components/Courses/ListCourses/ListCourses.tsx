import {
  Box,
  Button,
  Container,
  TableContainer,
  TextField
} from '@mui/material';
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
import ReplyIcon from '@mui/icons-material/Reply';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
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
              <Box
                className="container-options-right"
                sx={{
                  fontFamily: 'Arial, Helvetica, sans-serif '
                }}>
                <ReplyIcon className="icon-share" />
                <p>View courses catalog</p>
              </Box>
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
                      <TableCell sx={{ paddingRight: '22px' }} align="right">
                        {course.category}
                      </TableCell>
                      <TableCell sx={{ paddingRight: '28px' }} align="right">
                        {course.timeUpdate}
                      </TableCell>
                      <TableCell sx={{ paddingRight: '28px' }} align="right">
                        <MoreHorizIcon />
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
        </Container>
      </MainContent>
    </>
  );
};

export default ListCoursesRender;
