import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GridOnIcon from '@mui/icons-material/GridOn';
import GroupsIcon from '@mui/icons-material/Groups';
import InfoIcon from '@mui/icons-material/Info';
import LayersIcon from '@mui/icons-material/Layers';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Box, Container, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// import '../Courses../componnent'
// import { UserDB } from './../types/users';
// import Courses from '../../fakeData/courses';
import { courses } from '../../fakeData/courses';
import './Courses.css';

export const Courses = () => {
  return (
    <>
      <Container className="main-container">
        <Box className="box-content-container">
          <Box className="box-content-left">
            <Box className="box-content-left-container">
              <Box>
                <input
                  className="content-button"
                  placeholder="Search my courses"
                />
              </Box>
              <Box className="box-content-left-option">
                <Box className="box-content-right-link">
                  <Box>
                    <LayersIcon />
                  </Box>
                  <Box>Name</Box>
                </Box>
                <button className="box-content-right-btn1">
                  <ViewListIcon
                    sx={{
                      fontWeight: 300,
                      fontSize: 20
                    }}
                  />
                </button>
                <button className="box-content-right-btn2">
                  <GridOnIcon
                    sx={{
                      fontWeight: 300,
                      fontSize: 20
                    }}
                  />
                </button>
              </Box>
            </Box>
            {/* List courses */}
            <Box className="card-container-imageList">
              <Box className="card-course">
                <Box className="card-course-container">
                  {courses.map((course) => (
                    <Box key={course.id} className="course-item">
                      <img
                        className="courses-item-image"
                        src={`${course.imageURL}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${course.imageURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={''}
                        loading="lazy"
                      />
                      <Box className="courses-item-container">
                        <button className="courses-item-left">
                          <Link component={RouterLink} to={`/courses/${course.id}`}>
                            <ModeEditIcon />
                          </Link>
                        </button>
                        <button className="courses-item-right">
                          <InfoIcon />
                        </button>
                      </Box>
                      <p>{course.title}</p>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="box-content-right">
            <Box className="box-content-right-container">
              {/* List1 */}
              <Box className="box-content-right-container-item">
                <Box className="item-left">
                  <LibraryBooksIcon />
                </Box>
                <Box className="item-right">
                  <h5>COURSES</h5>
                  <Link
                    component={RouterLink}
                    to={'/courses/add'}
                    underline="none">
                    Add course
                  </Link>
                </Box>
              </Box>

              <Box className="box-content-right-container-item">
                <Box className="item-left">
                  <GroupsIcon />
                </Box>
                <Box className="item-right">
                  <h5>Groups</h5>
                  <p>Add groups</p>
                </Box>
              </Box>

              <Box className="box-content-right-container-item">
                <Box className="item-left">
                  <LibraryBooksIcon />
                </Box>
                <Box className="item-right">
                  <h5>Conferences</h5>
                  <p>Add conferences</p>
                </Box>
              </Box>

              <Box className="box-content-right-container-item">
                <Box className="item-left">
                  <LocationCityIcon />
                </Box>
                <Box className="item-right">
                  <h5>Discussions</h5>
                  <p>Add discussions</p>
                </Box>
              </Box>

              <Box className="box-content-right-container-item">
                <Box className="item-left">
                  <CalendarMonthIcon />
                </Box>
                <Box className="item-right">
                  <h5>CALENDAR</h5>
                  <p>Add event</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
