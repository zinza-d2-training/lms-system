import { SnackbarProvider } from 'notistack';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import AddContent from './components/Contents/AddContent/index';
import { Courses as CourseIndex } from './components/Courses';
import CourseDetail from './components/Courses/CourseDetail';
import CourseForm from './components/Courses/CourseForm';
import Courses from './components/Courses/Courses';
import ListCoursesRender from './components/Courses/ListCourses/ListCourses';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { ManagementUser } from './components/ManagementUser/ManagementUser';
import ManagerFiles from './components/ManagerFiles/ManagerFiles';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Signup from './components/Signup/Signup';
import { UserRole } from './types/users';
import DiscussionList from './components/Discussions/DiscussionList';
import DiscussionDetail from './components/Discussions/DiscussionDetail';
import Discussion from './components/Discussions/Discussion';
import ViewContents from './components/Contents/ViewContent/ViewContents';
import axiosClient from './utils/axios';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axiosClient.get('http://127.0.0.1:5000');
        setData(data);
      } catch (error) {
        console.error('Failed to fetch products : ', error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />}>
            <Route
              index
              element={
                <PrivateRoute roles={[UserRole.Instructor, UserRole.Learner]}>
                  <CourseIndex />
                </PrivateRoute>
              }
            />
            <Route path="courses" element={<Courses />}>
              <Route
                index
                element={
                  <PrivateRoute roles={[UserRole.Instructor, UserRole.Learner]}>
                    <ListCoursesRender />
                  </PrivateRoute>
                }
              />

              <Route
                path="add"
                element={
                  <PrivateRoute roles={[UserRole.Instructor]}>
                    <CourseForm />
                  </PrivateRoute>
                }
              />
              <Route
                path=":id/edit"
                element={
                  <PrivateRoute roles={[UserRole.Instructor]}>
                    <CourseForm />
                  </PrivateRoute>
                }
              />
              <Route
                path=":id/users"
                element={
                  <PrivateRoute roles={[UserRole.Instructor]}>
                    <ManagementUser />
                  </PrivateRoute>
                }
              />
              <Route
                path=":id/files"
                element={
                  <PrivateRoute roles={[UserRole.Instructor]}>
                    <ManagerFiles />
                  </PrivateRoute>
                }
              />
              <Route
                path=":id"
                element={
                  <PrivateRoute roles={[UserRole.Instructor]}>
                    <CourseDetail />
                  </PrivateRoute>
                }
              />

              <Route
                path=":id/contents/edit/:type/:contentId"
                element={
                  <PrivateRoute roles={[UserRole.Instructor]}>
                    <AddContent />
                  </PrivateRoute>
                }></Route>
              <Route
                path=":id/contents/add/:type"
                element={
                  <PrivateRoute roles={[UserRole.Instructor]}>
                    <AddContent />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path=":id/files"
              element={
                <PrivateRoute roles={[UserRole.Instructor]}>
                  <ManagerFiles />
                </PrivateRoute>
              }
            />
            <Route path="discussion" element={<Discussion />}>
              <Route index element={<DiscussionList />} />
              <Route path=":discussionId" element={<DiscussionDetail />} />
            </Route>
          </Route>

          <Route
            path="/view/:id/content/:contentId"
            element={
              <PrivateRoute roles={[UserRole.Instructor, UserRole.Learner]}>
                <ViewContents />
              </PrivateRoute>
            }
          />
        </Routes>
      </SnackbarProvider>
    </div>
  );
}

export default App;
