import GridOnIcon from '@mui/icons-material/GridOn';
import InfoIcon from '@mui/icons-material/Info';
import LayersIcon from '@mui/icons-material/Layers';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Box, Container, Link, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { UserRole } from '../../types/users';
import DiscussionForm from '../Discussions/DiscussionForm';
import CourseInfoDialog from './CourseInfoDialog';
import './Courses.css';
import { useGetCourses } from './hook';
//import { useCourseLastContentMapping } from './hook';

export const Courses = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openCoursePopup, setOpenCoursePopup] = useState(false);
  const [courseId, setCourseId] = useState<number>();
  const userContext = useContext(UserContext);
  const { courses, loading } = useGetCourses();
  console.log(courses);

  const handleOnClick = () => {
    setOpenPopup(true);
  };

  const handleOpenCoursePopup = (id: number) => {
    setCourseId(id);
    setOpenCoursePopup(true);
  };
  //const mapping = useCourseLastContentMapping(courses.map((item) => item.id));
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
                      <img src={`${course.image}`} alt={'img'} />
                      <Box className="courses-item-container">
                        <button className="courses-item-left">
                          {userContext.role === UserRole.Instructor ? (
                            <Link
                              component={RouterLink}
                              to={`/courses/${course.id}`}
                              color="inherit">
                              <ModeEditIcon />
                            </Link>
                          ) : (
                            <Link
                              component={RouterLink}
                              to={`/view/${course.id}`}
                              color="inherit">
                              <PlayCircleFilledWhiteOutlinedIcon />
                            </Link>
                            // to={`/view/${course.id}/content/${mapping?.get(
                            //     course.id
                            //   )}`}
                          )}
                        </button>
                        <button
                          className="courses-item-right"
                          onClick={() => handleOpenCoursePopup(course.id)}>
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
                  <Link component={RouterLink} to={'/courses'} underline="none">
                    <h5>COURSES</h5>
                  </Link>
                  {userContext.role === UserRole.Instructor ? (
                    <Link
                      component={RouterLink}
                      to={'/courses/add'}
                      underline="none">
                      <Typography variant="caption">Add course</Typography>
                    </Link>
                  ) : (
                    <></>
                  )}
                </Box>
              </Box>

              <Box className="box-content-right-container-item">
                <Box className="item-left">
                  <LocationCityIcon />
                </Box>
                <Box className="item-right">
                  <Link
                    component={RouterLink}
                    underline="hover"
                    to={'/discussion'}
                    color="inherit">
                    <h5>Discussions</h5>
                  </Link>
                  <Link
                    component={RouterLink}
                    underline="hover"
                    to={'#'}
                    color="inherit"
                    onClick={handleOnClick}>
                    <Typography variant="caption">Add discussions</Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      {openPopup && (
        <DiscussionForm
          label={'Add discussion'}
          handleClose={() => setOpenPopup(false)}
        />
      )}
      {openCoursePopup && (
        <CourseInfoDialog
          id={courseId}
          handleClose={() => setOpenCoursePopup(false)}
        />
      )}
    </>
  );
};
