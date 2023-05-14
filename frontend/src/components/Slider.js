import React from 'react';

function Slider() {

  return (
    <>
      <div className="wrapper">
        <section className="all-sliders">
          <label className="slider-container first">
            <span>Manufacturing Year</span>
            <input
              className="slider"
              id="range-slider"
              type="range"
              min="1"
              step="0.01"
              max="100"
              defaultValue="80"
            />
          </label>

          <label className="slider-container second">
            <span>Warranty Period (Months)</span>
            <input
              className="slider"
              id="range-slider2"
              type="range"
              min="1"
              step="0.01"
              max="100"
              defaultValue="20"
            />
          </label>

          <label className="slider-container third">
            <span>Color</span>
            <input
              className="slider"
              id="range-slider3"
              type="range"
              min="1"
              step="0.01"
              max="100"
              defaultValue="75"
            />
          </label>

          <label className="slider-container fourth">
            <span>Fuel Type</span>
            <input
              className="slider"
              id="range-slider4"
              type="range"
              min="1"
              step="0.01"
              max="100"
              defaultValue="35"
            />
          </label>

          <label className="slider-container fifth">
            <span>Location</span>
            <input
              className="slider"
              id="range-slider5"
              type="range"
              min="1"
              step="0.01"
              max="100"
              defaultValue="90"
            />
          </label>

          <label className="slider-container sixth">
            <span>Brand</span>
            <input
              className="slider"
              id="range-slider6"
              type="range"
              min="1"
              step="0.01"
              max="100"
              defaultValue="45"
            />
          </label>
        </section>
      </div>
    </>
  );
}

export default Slider;