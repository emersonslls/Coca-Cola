import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePT from './Pages/HomePT/HomePT';
import HomeEN from './Pages/HomeEN/HomeEN';
import Inicio from './Pages/Inicio/Inicio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/en' element={<HomeEN />} />
        <Route path='/pt' element={<HomePT />} />
      </Routes>
    </Router>
  );
}

export default App;
