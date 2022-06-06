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
import { Pagination } from '../Pagination';
import CourseInfoDialog from './CourseInfoDialog';
import './Courses.css';
import { useGetCourses } from './hook';
import { formatUrl } from './../../utils/formatUrl';

export const Courses = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openCoursePopup, setOpenCoursePopup] = useState(false);
  const [courseId, setCourseId] = useState<number>(0);
  const userContext = useContext(UserContext);
  const [filter, setFilter] = useState({
    page: 1,
    limit: 6,
    title: ''
  });
  const { courses, loading } = useGetCourses({
    page: filter.page,
    limit: filter.limit,
    title: filter.title
  });

  const handleOnClick = () => {
    setOpenPopup(true);
  };

  const handleOpenCoursePopup = (id: number) => {
    setCourseId(id);
    setOpenCoursePopup(true);
  };

  return (
    <>
      {loading ? (
        <>loading....</>
      ) : (
        <Container className="main-container">
          <Box className="box-content-container">
            <Box className="box-content-left">
              <Box className="box-content-left-container">
                <Box>
                  <input
                    className="content-button"
                    placeholder="Search my courses"
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        title: e.target.value
                      })
                    }
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
                    {courses?.courses.map((course) => (
                      <Box key={course.id} className="course-item">
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                          <img
                            src={formatUrl(
                              `${process.env.REACT_APP_BASE_API}/${course.image}`
                            )}
                            alt={'img'}
                            style={{
                              margin: '0 auto',
                              objectFit: 'cover',
                              height: 'auto'
                            }}
                          />
                        </Box>
                        <Box className="courses-item-container">
                          <button className="courses-item-left">
                            <Link
                              component={RouterLink}
                              to={`/courses/${course.id}`}
                              color="inherit">
                              <ModeEditIcon sx={{ color: 'white' }} />
                            </Link>
                          </button>
                          <button
                            className="courses-item-right"
                            onClick={() => handleOpenCoursePopup(course.id)}>
                            <InfoIcon sx={{ color: 'white' }} />
                          </button>
                        </Box>
                        <p>{course.title}</p>
                      </Box>
                    ))}
                  </Box>

                  <Box className="card-course-container">
                    {courses?.learn.map((course) => (
                      <Box key={course.id} className="course-item">
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                          <img
                            src={formatUrl(
                              `${process.env.REACT_APP_BASE_API}/${course.image}`
                            )}
                            alt={'img'}
                            style={{
                              margin: '0 auto',
                              objectFit: 'cover',
                              height: 'auto'
                            }}
                          />
                        </Box>
                        <Box className="courses-item-container">
                          <button className="courses-item-left">
                            <Link
                              component={RouterLink}
                              to={`/view/${course.id}`}
                              color="inherit">
                              <PlayCircleFilledWhiteOutlinedIcon />
                            </Link>
                          </button>
                          <button
                            className="courses-item-right"
                            onClick={() => handleOpenCoursePopup(course.id)}>
                            <InfoIcon sx={{ color: 'white' }} />
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
                    <Link
                      component={RouterLink}
                      to={'/courses'}
                      underline="none">
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
          <Box>
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
        </Container>
      )}
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
