import React from 'react';
import { Route, Routes } from 'react-router-dom';
//import PrivateRoute from './components/common/PrivateRoute';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Signup from './components/Signup/Signup';
import ListCoursesRender from './components/Courses/ListCourses/ListCourses';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Courses" element={<ListCoursesRender />} />
      </Routes>
    </div>
  );
}

export default App;
