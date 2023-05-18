import React, { useEffect, useState } from 'react';

function Slider() {
  const [sliderValue, setSliderValue] = useState(9);
  const [fuelValue, setFuelValue] = useState(3);
  const [yearValue, setYearValue] = useState(21);
  const [warrantyValue, setWarrantyValue] = useState(5);
  const [brandValue, setBrandValue] = useState(30);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const colorNames = ["Black", "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "White"];  const [sliderText, setSliderText] = useState(colorNames[sliderValue]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fuelNames = ["Gasoline", "Diesel", "LPG"]; const [FuelText, setFuelText] = useState(fuelNames[fuelValue]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const yearNames = ["2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]; const [yaerText, setYearText] = useState(yearNames[yearValue]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const warrantyNames = ["No warranty", "3 months", "6 months", "1 year", "DS warranty"]; const [warrantyText, setWarrantyText] = useState(warrantyNames[warrantyValue]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const brandNames = ["Alfa Romeo", "Mitsubishi", "MINI", "Mazda", "Cupra", "SUZUKI", "Subaru", "Jeep", "Ssangyong", "Porsche", "Mercedes-Benz", "Honda", "Toyota", "Skoda", "SEAT", "Renault", "Peugeot", "Opel", "Nissan", "Land Rover", "KIA", "HYUNDAI", "Ford", "Fiat", "Dacia", "Citroen", "BMW", "Audi", "Volvo", "Volkswagen"]; const [brandText, setBrandText] = useState(brandNames[brandValue]);
  
  useEffect(() => {
    setSliderText(colorNames[sliderValue]);
  }, [sliderValue, colorNames]);

  useEffect(() => {
    setFuelText(fuelNames[fuelValue]);
  }, [fuelValue, fuelNames]);

  useEffect(() => {
    setYearText(yearNames[yearValue]);
  }, [yearValue, yearNames]);

  useEffect(() => {
    setWarrantyText(warrantyNames[warrantyValue]);
  }, [warrantyValue, warrantyNames]);

  useEffect(() => {
    setBrandText(brandNames[brandValue]);
  }, [brandValue, brandNames]);

  function handleSliderChange(event) {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    backgroundChanger();
  }

  function handleSliderChangeTwo(event) {
    const value = parseInt(event.target.value);
    setFuelValue(value);
  }

  function handleSliderChangeThree(event) {
    const value = parseInt(event.target.value);
    setYearValue(value);
  }

  function handleSliderChangeFour(event) {
    const value = parseInt(event.target.value);
    setWarrantyValue(value);
  }

  function handleSliderChangeFive(event) {
    const value = parseInt(event.target.value);
    setBrandValue(value);
  }

  function sliderSpanColorChanger(color) {
    var spans = document.getElementById("spans");
    var spans2 = document.getElementById("spans2");
    var spans3 = document.getElementById("spans3");
    var spans4 = document.getElementById("spans4");
    var spans5 = document.getElementById("spans5");
    var spans6 = document.getElementById("spans6");
    if (color === "white") {
      spans.style.color = "white";
      spans2.style.color = "white";
      spans3.style.color = "white";
      spans4.style.color = "white";
      spans5.style.color = "white";
      spans6.style.color = "white";
    }
    else if (color === "black") {
      spans.style.color = "black";
      spans2.style.color = "black";
      spans3.style.color = "black";
      spans4.style.color = "black";
      spans5.style.color = "black";
      spans6.style.color = "black";
    }
  }

  function backgroundChanger() {
    const body = document.getElementsByTagName("BODY")[0];;
    const headline = document.getElementById("headline");
    body.style.transition = "all 2s";
    if (typeof(headline) != 'undefined' && headline != null) {
      headline.style.transition = "all 2s";
      if (sliderValue === 0) {
        body.style.backgroundColor = "black";
        sliderSpanColorChanger("white");
        headline.style.color = "white";
      }
      else if (sliderValue === 1) {
        body.style.backgroundColor = "red";
        sliderSpanColorChanger("white");
        headline.style.color = "white";
      }
      else if (sliderValue === 2) {
        body.style.backgroundColor = "orange";
        sliderSpanColorChanger("black");
        headline.style.color = "black";
      }
      else if (sliderValue === 3) {
        body.style.backgroundColor = "yellow";
        sliderSpanColorChanger("black");
        headline.style.color = "black";
      }
      else if (sliderValue === 4) {
        body.style.backgroundColor = "green";
        sliderSpanColorChanger("white");
        headline.style.color = "white";
      }
      else if (sliderValue === 5) {
        body.style.backgroundColor = "blue";
        sliderSpanColorChanger("white");
        headline.style.color = "white";
      }
      else if (sliderValue === 6) {
        body.style.backgroundColor = "indigo";
        sliderSpanColorChanger("white");
        headline.style.color = "white";
      }
      else if (sliderValue === 7) {
        body.style.backgroundColor = "violet";
        sliderSpanColorChanger("black");
        headline.style.color = "black";
      }
      else if (sliderValue >= 8) {
        body.style.backgroundColor = "white";
        sliderSpanColorChanger("black");
        headline.style.color = "black";
      }
    }
  }

  return (
    <>
      <div className="wrapper">
        <section className="all-sliders">
          <label className="slider-container first">
            <span id='spans'>Manufacturing Year: {yaerText}</span>
            <input
              className="slider"
              id="range-slider"
              type="range"
              min="0"
              step="0.01"
              max="20"
              defaultValue="9"
              onChange={handleSliderChangeThree}
            />
          </label>

          <label className="slider-container second">
            <span id='spans2'>Warranty Period: {warrantyText}</span>
            <input
              className="slider"
              id="range-slider2"
              type="range"
              min="0"
              step="0.01"
              max="4"
              defaultValue="1"
              onChange={handleSliderChangeFour}
            />
          </label>

          <label className="slider-container third">
            <span id='spans3'>Color: {sliderText}</span>
            <input
              className="slider"
              id="range-slider3"
              type="range"
              min="0"
              step="0.01"
              max="8"
              defaultValue="6"
              onChange={handleSliderChange}
            />
          </label>

          <label className="slider-container fourth">
            <span id='spans4'>Fuel Type: {FuelText}</span>
            <input
              className="slider"
              id="range-slider4"
              type="range"
              min="0"
              step="0.01"
              max="2"
              defaultValue="1"
              onChange={handleSliderChangeTwo}
            />
          </label>

          <label className="slider-container fifth">
            <span id='spans5'>Location</span>
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
            <span id='spans6'>Brand: {brandText}</span>
            <input
              className="slider"
              id="range-slider6"
              type="range"
              min="0"
              step="0.01"
              max="20"
              defaultValue="13"
              onChange={handleSliderChangeFive}
            />
          </label>
        </section>
      </div>
    </>
  );
}

export default Slider;