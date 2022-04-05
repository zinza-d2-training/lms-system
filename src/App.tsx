import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { UserRole } from './types/users';

function App() {
  return (
    <div className="App">
      <Routes>
        <PrivateRoute
          path="/profile"
          userRoles={[UserRole.Instructor, UserRole.Learner]}
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
