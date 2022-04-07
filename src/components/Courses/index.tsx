import {
  Box,
  Button,
  Container,
  ImageList,
  ImageListItem,
  Input
} from '@mui/material';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import LayersIcon from '@mui/icons-material/Layers';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridOnIcon from '@mui/icons-material/GridOn';
// import '../Courses../componnent'
// import { UserDB } from './../types/users';
// import Courses from '../../fakeData/courses';
import { ListCourses } from '../../fakeData/courses';
import './Courses.css';

const Courses = () => {
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
            <ImageList>
              <Box className="card-course">
                <Box className="card-course-container">
                  <img
                    src="https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346756_intro.png?"
                    alt=""
                  />

                  <p>Hello 123213</p>
                </Box>
              </Box>
            </ImageList>
            {/* <Box>
              <ImageList
                sx={{ width: 500, height: 450 }}
                cols={3}
                rowHeight={164}>
                {ListCourses.map((course) => (
                  <ImageListItem key={course.imageURL}>
                    <img
                      src={`${course.imageURL}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${course.imageURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={''}
                      loading="lazy"
                    />
                    <p>{course.title}</p>
                  </ImageListItem>
                ))}
              </ImageList>
            </Box> */}
          </Box>

          <Box className="box-content-right"></Box>
        </Box>
      </Container>
    </>
  );
};

export default Courses;
