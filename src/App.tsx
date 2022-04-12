import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Courses from './components/Courses/Courses';
import PrivateRoute from './components/common/PrivateRoute';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Signup from './components/Signup/Signup';
import EditCourse from './components/Courses/EditCourse';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="courses" element={<Courses />}>
            <Route
              path="add"
              element={
                <PrivateRoute>
                  <EditCourse />
                </PrivateRoute>
              }
            />
            <Route
              path="edit/:id"
              element={
                <PrivateRoute>
                  <EditCourse />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
