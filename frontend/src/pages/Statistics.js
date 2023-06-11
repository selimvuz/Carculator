import React from 'react';
import './Pages.css'
import colorImg from '../components/assets/color.png';
import brandImg from '../components/assets/brand.png';
import fuelImg from '../components/assets/fuel.png';
import locationImg from '../components/assets/location.png';
import warrantyImg from '../components/assets/warranty.png';
import yearImg from '../components/assets/year.png';

function Statistics() {
  function getCurrentURL () {
    return window.location.href
  }
  
  // Example
  var url = getCurrentURL()
  if(url === "http://localhost:3000/statistics") {
    var home = document.getElementById("home");
    var speed = document.getElementById("speedContainer");
    if (home !== "undefined" && home !== null &&
        speed !== "undefined" && speed !== null) {
      home.style.display = "none";
      speed.style.display = "none";
    }
  }
  return (
    <div className='statistics'>
      <h1 id='headline'>Statistics</h1>
      <div id='stats'>
          <img src={colorImg} alt="Colors Dist." />
          <img src={yearImg} alt="Year Dist." />
          <img src={locationImg} alt="Location Dist." />
          <img src={brandImg} alt="Brand Dist." />
          <img src={warrantyImg} alt="Warranty Dist." />
          <img src={fuelImg} alt="Fuel Dist." />
        </div>
    </div>
  );
}

export default Statistics;
