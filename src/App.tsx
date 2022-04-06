import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import PrivateRoute from './components/common/PrivateRoute';
import Login from './components/Login/Login';
//import { UserRole } from './types/users';
import Home from './components/Home/Home';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <PrivateRoute
          path="/profile"
          element={null}
        /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
