import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/common/PrivateRoute';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ResetPassword from './components/ResetPassword/ResetPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route
          path="/reset"
          element={
            <PrivateRoute>
              <ResetPassword />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
