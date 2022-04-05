import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Forgotpassword from './components/Forgotpassword/Forgotpassword';
import Resetpassword from './components/Resetpassword/Resetpassword';
import './App.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgot" element={<Forgotpassword />} />
        <Route path="/reset" element={<Resetpassword />} />
      </Routes>
    </div>
  );
}

export default App;
