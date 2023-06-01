import React, { useEffect, useState, useRef } from 'react';
import './Button.css';
import { Fragment } from 'https://cdn.skypack.dev/react'
import { js2xml } from 'xml-js';
import { saveAs } from 'file-saver';
import map from './assets/map.png';

function SliderButton(speedoVariable, controlPoint) {
  controlPoint = 1;
  const [sliderValue, setSliderValue] = useState(6);
  const [fuelValue, setFuelValue] = useState(1);
  const [yearValue, setYearValue] = useState(2011);
  const [warrantyValue, setWarrantyValue] = useState(1);
  const [brandValue, setBrandValue] = useState(12);
  const [locationValue, setLocationValue] = useState(3);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const colorNames = ["Black", "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "White", "White"];  const [sliderText, setSliderText] = useState(colorNames[sliderValue]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fuelNames = ["Gasoline", "Diesel", "LPG"]; const [FuelText, setFuelText] = useState(fuelNames[fuelValue]);
  // eslint-disable-next-line react-hooks/exhaustive-deps, no-unused-vars
  const yearNames = ["2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]; const [yaerText, setYearText] = useState(yearNames[yearValue]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const warrantyNames = ["No warranty", "3 months", "6 months", "1 year", "DS warranty"]; var [warrantyText, setWarrantyText] = useState(warrantyNames[warrantyValue]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const brandNames = ["Alfa Romeo", "Mitsubishi", "MINI", "Mazda", "Cupra", "SUZUKI", "Subaru", "Jeep", "Ssangyong", "Porsche", "Mercedes-Benz", "Honda", "Toyota", "Skoda", "SEAT", "Renault", "Peugeot", "Opel", "Nissan", "Land Rover", "KIA", "HYUNDAI", "Ford", "Fiat", "Dacia", "Citroen", "BMW", "Audi", "Volvo", "Volkswagen"]; const [brandText, setBrandText] = useState(brandNames[brandValue]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const locationNames = ["Mediterranean Region", "Marmara Region", "Black Sea Region", "Aegean Region", "Central Anatolia", "Southeastern Anatolia"]; const [locationText, setLocationText] = useState(locationNames[locationValue]);
  var speedXML = document.getElementById("realInput");
  if (speedXML != null) {
    var speedValue = speedXML.value.toString();
    console.log(speedValue);
  }

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

  useEffect(() => {
    setLocationText(locationNames[locationValue]);
  }, [locationValue, locationNames]);
  var mapImage = document.getElementById("map");

  function handleSliderChange(event) {
    var value = parseInt(event.target.value);
    setSliderValue(value);
    backgroundChanger();
  }

  function handleSliderChangeTwo(event) {
    var value = parseInt(event.target.value);
    setFuelValue(value);
  }

  function handleSliderChangeThree(event) {
    var value = parseInt(event.target.value);
    setYearValue(value);
  }

  function handleSliderChangeFour(event) {
    var value = parseInt(event.target.value);
    setWarrantyValue(value);
  }

  function handleSliderChangeFive(event) {
    var value = parseInt(event.target.value);
    setBrandValue(value);
  }

  function handleSliderChangeSix(event) {
    var value = parseInt(event.target.value);
    setLocationValue(value);
    if (typeof(mapImage) != 'undefined' && mapImage != null) {
      mapImage.style.display = "block";
    }
  }


  function sliderSpanColorChanger(color) {
    var spans = document.getElementById("spans");
    var spans2 = document.getElementById("spans2");
    var spans3 = document.getElementById("spans3");
    var spans4 = document.getElementById("spans4");
    var spans5 = document.getElementById("spans5");
    var spans6 = document.getElementById("spans6");
    if (typeof(spans) != 'undefined' && spans != null &&
        typeof(spans2) != 'undefined' && spans2 != null &&
        typeof(spans3) != 'undefined' && spans3 != null &&
        typeof(spans4) != 'undefined' && spans4 != null &&
        typeof(spans5) != 'undefined' && spans5 != null &&
        typeof(spans6) != 'undefined' && spans6 != null) {
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

  const renderSpanText = () => {
      return <span id="spans">Manufacturing Year: {yearValue}</span>;
  };

  const saveSliderValuesToXML = () => {
    // Get slider values
    const sliderValues = [colorNames[sliderValue], fuelNames[fuelValue], yearValue, warrantyNames[warrantyValue], brandNames[brandValue], locationNames[locationValue], speedValue];
  
    // Create XML object
    const xmlObject = {
      carProperties: {
        values: sliderValues.map((value) => ({
          _text: value,
        })),
      },
    };
  
    // Convert XML object to XML string
    const xmlString = js2xml(xmlObject, { compact: true, spaces: 4 });
  
    // Save XML string to file using FileSaver.js
    const blob = new Blob([xmlString], { type: 'application/xml' });
    saveAs(blob, 'slider_values.xml');
  };
  
  const Button = ({ as, children, filled, secondary, ...rest }) => {
    const that = {
      as
    }
    return (
      <that.as className={`dir-control ${secondary ? 'dir-control--secondary' : ''} ${filled ? 'dir-control--filled' : ''}`} {...rest} >
        {children}
        <span/>
        <span/>
        <span/>
        <span/>
        <b aria-hidden="true">{children}</b>
        <b aria-hidden="true">{children}</b>
        <b aria-hidden="true">{children}</b>
        <b aria-hidden="true">{children}</b>
      </that.as>
    )
  }
  Button.defaultProps = {
    as: 'button'
  }

  if (controlPoint === 1) {
    return (
      <>
        <div>
          <div className="wrapper">
            <section className="all-sliders">
              <label className="slider-container first">
                {renderSpanText()}
                <input
                  className="slider"
                  id="range-slider"
                  type="range"
                  min="2002"
                  step="0.01"
                  max="2022"
                  defaultValue="2011"
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
                  max="9"
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
                <span id='spans5'>Location: {locationText}</span>
                <input
                  className="slider"
                  id="range-slider5"
                  type="range"
                  min="0"
                  step="0.01"
                  max="5"
                  defaultValue="4"
                  onChange={handleSliderChangeSix}
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
                  max="29"
                  defaultValue="13"
                  onChange={handleSliderChangeFive}
                />
              </label>
  
              <img id="map" src={map} alt="Map" />
            </section>
          </div>
        <Fragment>
              <Button id="resetButton" role="button" href="" filled >Reset</Button>
              <Button id="carButton" as="a" onClick={saveSliderValuesToXML} filled >Carculate</Button>
        </Fragment>
        </div>
      </>
    );
  } else if (controlPoint === 2) {
    console.log("Just walking around uwu");
  } 
}

export default SliderButton;