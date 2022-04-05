import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Forgotpassword from './components/Forgotpassword/Forgotpassword'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forgot' element={<Forgotpassword />} />
      </Routes>
    </div>
  );
}

export default App;
