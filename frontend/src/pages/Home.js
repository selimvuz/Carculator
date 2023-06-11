import React from 'react';
import './Pages.css'

function Home() {
  function getCurrentURL () {
    return window.location.href
  }
  
  // Example
  var url = getCurrentURL()
  if(url === "http://localhost:3000/") {
    var home = document.getElementById("home");
    var speed = document.getElementById("speedContainer");
    if (home !== "undefined" && home !== null &&
        speed !== "undefined" && speed !== null) {
      home.style.display = "block";
      speed.style.display = "block";
    }
  }
  return (
    <div className='home'>
      <h1 id='headline'>Carculator</h1>
    </div>
  );
}

export default Home;
