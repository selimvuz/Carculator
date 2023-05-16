import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Button from './components/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Slider />
        <Button />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/reports' element={<Reports/>} />
          <Route path='/products' element={<Products/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
