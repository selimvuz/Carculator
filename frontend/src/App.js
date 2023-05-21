import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Button from './components/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Slider />
        <Button />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
