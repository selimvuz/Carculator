import React, { useEffect, useState } from 'react';
import './Button.css';
import { Fragment } from 'https://cdn.skypack.dev/react'
import { js2xml } from 'xml-js';
import { saveAs } from 'file-saver';
import map from './assets/map.png';

function SliderButton() {
  var postMetallic = "Hayır";
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
  } else {
    speedValue = 170;
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
    updateModelBox(value);
  }

  function updateModelBox(value) {
    var currentOptions = document.getElementById("models");
    var Brand = brandNames[value];
    currentOptions.innerHTML = "";

    if (Brand === "Toyota") {
      currentOptions.options.add(new Option("Corolla", "Corolla"));
      currentOptions.options.add(new Option("Yaris", "Yaris"));
      currentOptions.options.add(new Option("C-HR", "C-HR"));
    } else if (Brand === "Audi") {
      currentOptions.options.add(new Option("A1", "A1"));
      currentOptions.options.add(new Option("A3", "A3"));
      currentOptions.options.add(new Option("A4", "A4"));
      currentOptions.options.add(new Option("A5", "A5"));
      currentOptions.options.add(new Option("A6", "A6"));
      currentOptions.options.add(new Option("A8", "A8"));
      currentOptions.options.add(new Option("Q2", "Q2"));
      currentOptions.options.add(new Option("Q3", "Q3"));
      currentOptions.options.add(new Option("Q5", "Q5"));
      currentOptions.options.add(new Option("Q7", "Q7"));
      currentOptions.options.add(new Option("Q8", "Q8"));
    } else if (Brand === "Volkswagen") {
      currentOptions.options.add(new Option("Polo", "Polo"));
      currentOptions.options.add(new Option("Caddy", "Caddy"));
      currentOptions.options.add(new Option("Golf", "Golf"));
      currentOptions.options.add(new Option("Transporter", "Transporter"));
      currentOptions.options.add(new Option("Passat", "Passat"));
      currentOptions.options.add(new Option("Caravelle", "Caravelle"));
      currentOptions.options.add(new Option("Tiguan", "Tiguan"));
      currentOptions.options.add(new Option("Arteon", "Arteon"));
      currentOptions.options.add(new Option("T-ROC", "T-ROC"));
      currentOptions.options.add(new Option("Touareg", "Touareg"));
      currentOptions.options.add(new Option("T-Cross", "T-Cross"));
      currentOptions.options.add(new Option("Taigo", "Taigo"));
      currentOptions.options.add(new Option("Scirocco", "Scirocco"));
      currentOptions.options.add(new Option("Jetta", "Jetta"));
      currentOptions.options.add(new Option("Amarok", "Amarok"));
      currentOptions.options.add(new Option("Beetle", "Beetle"));
      currentOptions.options.add(new Option("CC", "CC"));
    } else if (Brand === "Fiat") {
      currentOptions.options.add(new Option("Egea", "Egea"));
      currentOptions.options.add(new Option("Fiorino", "Fiorino"));
      currentOptions.options.add(new Option("Doblo Combi", "Doblo Combi"));
      currentOptions.options.add(new Option("Grande Punto", "Grande Punto"));
      currentOptions.options.add(new Option("Linea", "Linea"));
      currentOptions.options.add(new Option("Punto Evo", "Punto Evo"));
      currentOptions.options.add(new Option("Freemont", "Freemont"));
    } else if (Brand === "Volvo") {
      currentOptions.options.add(new Option("S60", "S60"));
      currentOptions.options.add(new Option("S90", "S90"));
      currentOptions.options.add(new Option("XC90", "XC90"));
      currentOptions.options.add(new Option("XC60", "XC60"));
      currentOptions.options.add(new Option("V40", "V40"));
    } else if (Brand === "BMW") {
      currentOptions.options.add(new Option("3 Serisi", "3 Serisi"));
      currentOptions.options.add(new Option("2 SERISI GRAN COUPE", "2 SERISI GRAN COUPE"));
      currentOptions.options.add(new Option("5 Serisi", "5 Serisi"));
      currentOptions.options.add(new Option("2 Serisi", "2 Serisi"));
      currentOptions.options.add(new Option("1 Serisi", "1 Serisi"));
      currentOptions.options.add(new Option("X1", "X1"));
      currentOptions.options.add(new Option("X3", "X3"));
      currentOptions.options.add(new Option("7 Serisi", "7 Serisi"));
      currentOptions.options.add(new Option("6 Serisi", "6 Serisi"));
      currentOptions.options.add(new Option("SERIES 1", "SERIES 1"));
      currentOptions.options.add(new Option("X5", "X5"));
      currentOptions.options.add(new Option("4 Serisi", "4 Serisi"));
    } else if (Brand === "Citroen") {
      currentOptions.options.add(new Option("C3", "C3"));
      currentOptions.options.add(new Option("C-ELYSEE", "C-ELYSEE"));
      currentOptions.options.add(new Option("Jumpy", "Jumpy"));
      currentOptions.options.add(new Option("C5 Aircross", "C5 Aircross"));
      currentOptions.options.add(new Option("BERLİNGO", "BERLİNGO"));
      currentOptions.options.add(new Option("C4 PICASSO", "C4 PICASSO"));
      currentOptions.options.add(new Option("DS4", "DS4"));
      currentOptions.options.add(new Option("C4 CACTUS", "C4 CACTUS"));
    } else if (Brand === "Ford") {
      currentOptions.options.add(new Option("Tourneo Courier", "Tourneo Courier"));
      currentOptions.options.add(new Option("Focus", "Focus"));
      currentOptions.options.add(new Option("Tourneo Connect", "Tourneo Connect"));
      currentOptions.options.add(new Option("KUGA", "KUGA"));
      currentOptions.options.add(new Option("Ecosport", "Ecosport"));
      currentOptions.options.add(new Option("Fiesta", "Fiesta"));
      currentOptions.options.add(new Option("Fusion", "Fusion"));
      currentOptions.options.add(new Option("B-Max", "B-Max"));
      currentOptions.options.add(new Option("Mondeo", "Mondeo"));
      currentOptions.options.add(new Option("Tourneo Custom", "Tourneo Custom"));
      currentOptions.options.add(new Option("Ranger", "Ranger"));
    } else if (Brand === "HYUNDAI") {
      currentOptions.options.add(new Option("I20", "I20"));
      currentOptions.options.add(new Option("I10", "I10"));
      currentOptions.options.add(new Option("Tucson", "Tucson"));
      currentOptions.options.add(new Option("Getz", "Getz"));
      currentOptions.options.add(new Option("Accent", "Accent"));
      currentOptions.options.add(new Option("Accent Blue", "Accent Blue"));
      currentOptions.options.add(new Option("ix35", "ix35"));
      currentOptions.options.add(new Option("I30", "I30"));
    } else if (Brand === "Dacia") {
      currentOptions.options.add(new Option("Lodgy", "Lodgy"));
      currentOptions.options.add(new Option("Duster", "Duster"));
      currentOptions.options.add(new Option("Sandero", "Sandero"));
      currentOptions.options.add(new Option("Sandero Stepway", "Sandero Stepway"));
    } else if (Brand === "Land Rover") {
      currentOptions.options.add(new Option("Range Rover Velar", "Range Rover Velar"));
      currentOptions.options.add(new Option("Range Rover Sport", "Range Rover Sport"));
      currentOptions.options.add(new Option("Range Rover Evoque", "Range Rover Evoque"));
      currentOptions.options.add(new Option("Discovery Sport", "Discovery Sport"));
    } else if (Brand === "Nissan") {
      currentOptions.options.add(new Option("Qashqai", "Qashqai"));
      currentOptions.options.add(new Option("Juke", "Juke"));
      currentOptions.options.add(new Option("Micra", "Micra"));
      currentOptions.options.add(new Option("X-Trail", "X-Trail"));
    } else if (Brand === "Peugeot") {
      currentOptions.options.add(new Option("301", "301"));
      currentOptions.options.add(new Option("3008", "3008"));
      currentOptions.options.add(new Option("Rifter", "Rifter"));
      currentOptions.options.add(new Option("308", "308"));
      currentOptions.options.add(new Option("2008", "2008"));
      currentOptions.options.add(new Option("508", "508"));
      currentOptions.options.add(new Option("208", "208"));
      currentOptions.options.add(new Option("5008", "5008"));
      currentOptions.options.add(new Option("206", "206"))
    } else if (Brand === "Renault") {
      currentOptions.options.add(new Option("SYMBOL", "SYMBOL"));
      currentOptions.options.add(new Option("Clio", "Clio"));
      currentOptions.options.add(new Option("Megane", "Megane"));
      currentOptions.options.add(new Option("Kadjar", "Kadjar"));
      currentOptions.options.add(new Option("Captur", "Captur"));
      currentOptions.options.add(new Option("Taliant", "Taliant"));
      currentOptions.options.add(new Option("Fluence", "Fluence"));
      currentOptions.options.add(new Option("Kangoo Multix", "Kangoo Multix"));
    } else if (Brand === "KIA") {
      currentOptions.options.add(new Option("Rio", "Rio"));
      currentOptions.options.add(new Option("Sportage", "Sportage"));
      currentOptions.options.add(new Option("Picanto", "Picanto"));
      currentOptions.options.add(new Option("Ceed", "Ceed"));
    } else if (Brand === "Skoda") {
      currentOptions.options.add(new Option("Octavia", "Octavia"));
      currentOptions.options.add(new Option("Karoq", "Karoq"));
      currentOptions.options.add(new Option("Kodiaq", "Kodiaq"));
      currentOptions.options.add(new Option("Fabia", "Fabia"));
      currentOptions.options.add(new Option("Scala", "Scala"));
      currentOptions.options.add(new Option("Kamiq", "Kamiq"));
      currentOptions.options.add(new Option("Superb", "Superb"));
      currentOptions.options.add(new Option("Yeti", "Yeti"));
      currentOptions.options.add(new Option("Rapid", "Rapid"));
    } else if (Brand === "Honda") {
      currentOptions.options.add(new Option("Civic", "Civic"));
      currentOptions.options.add(new Option("City", "City"));
      currentOptions.options.add(new Option("CR-V", "CR-V"));
      currentOptions.options.add(new Option("HR-V", "HR-V"));
    } else if (Brand === "Mercedes-Benz") {
      currentOptions.options.add(new Option("A-Serisi", "A-Serisi"));
      currentOptions.options.add(new Option("GLB", "GLB"));
      currentOptions.options.add(new Option("E-Serisi", "E-Serisi"));
      currentOptions.options.add(new Option("S-Serisi", "S-Serisi"));
      currentOptions.options.add(new Option("B-Serisi", "B-Serisi"));
      currentOptions.options.add(new Option("C-Serisi", "C-Serisi"));
      currentOptions.options.add(new Option("CLA-Serisi", "CLA-Serisi"));
      currentOptions.options.add(new Option("X-Class", "X-Class"));
      currentOptions.options.add(new Option("Vito", "Vito"));
    } else if (Brand === "Ssangyong") {
      currentOptions.options.add(new Option("Korando", "Korando"));
    } else if (Brand === "Jeep") {
      currentOptions.options.add(new Option("Renegade", "Renegade"));
    } else if (Brand === "Subaru") {
      currentOptions.options.add(new Option("XV", "XV"));
    } else if (Brand === "SUZUKI") {
      currentOptions.options.add(new Option("SWIFT", "SWIFT"));
      currentOptions.options.add(new Option("GRAND VITARA", "GRAND VITARA"));
    } else if (Brand === "Cupra") {
      currentOptions.options.add(new Option("Formentor", "Formentor"));
    } else if (Brand === "Mazda") {
      currentOptions.options.add(new Option("Mazda3", "Mazda3"));
    } else if (Brand === "Porsche") {
      currentOptions.options.add(new Option("Cayenne", "Cayenne"));
      currentOptions.options.add(new Option("Boxer", "Boxer"));
    } else if (Brand === "MINI") {
      currentOptions.options.add(new Option("One", "One"));
      currentOptions.options.add(new Option("Countryman", "Countryman"));
    } else if (Brand === "Mitsubishi") {
      currentOptions.options.add(new Option("Colt", "Colt"));
    } else if (Brand === "Alfa Romeo") {
      currentOptions.options.add(new Option("Giulietta", "Giulietta"));
    } else if (Brand === "SEAT") {
      currentOptions.options.add(new Option("Yeni Ibiza", "Yeni Ibiza"));
      currentOptions.options.add(new Option("Leon", "Leon"));
      currentOptions.options.add(new Option("Ateca", "Ateca"));
      currentOptions.options.add(new Option("Arona", "Arona"));
      currentOptions.options.add(new Option("Tarraco", "Tarraco"));
      currentOptions.options.add(new Option("Altea XL", "Altea XL"));
      currentOptions.options.add(new Option("Toledo", "Toledo"));
    } else if (Brand === "Opel") {
      currentOptions.options.add(new Option("Corsa", "Corsa"));
      currentOptions.options.add(new Option("Astra", "Astra"));
      currentOptions.options.add(new Option("Crossland X", "Crossland X"));
      currentOptions.options.add(new Option("Grandland X", "Grandland X"));
      currentOptions.options.add(new Option("Insignia", "Insignia"));
      currentOptions.options.add(new Option("Crossland", "Crossland"));
      currentOptions.options.add(new Option("Meriva", "Meriva"));
    }
  } 

  function handleSliderChangeSix(event) {
    var value = parseInt(event.target.value);
    setLocationValue(value);
    if (typeof(mapImage) != 'undefined' && mapImage != null) {
      mapImage.style.display = "block";
    }
  }

  function handleBox() {
    var value = document.getElementById("metallicBox");
    if (value.checked) {
      postMetallic = "Evet";
    }
    else {
      postMetallic = "Hayır";
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
    var modelText = document.getElementById("modelLabel");
    var metallicText = document.getElementById("metallicText");
    body.style.transition = "all 2s";
    if (typeof(headline) != 'undefined' && headline != null &&
        typeof(modelText) != 'undefined' && modelText != null &&
        typeof(metallicText) != 'undefined' && metallicText != null) {
      headline.style.transition = "all 2s";
      if (sliderValue === 0) {
        body.style.backgroundColor = "black";
        sliderSpanColorChanger("white");
        headline.style.color = "white";
        modelText.style.color = "white";
        metallicText.style.color = "white";
      }
      else if (sliderValue === 1) {
        body.style.backgroundColor = "red";
        sliderSpanColorChanger("white");
        headline.style.color = "white";
        modelText.style.color = "white";
        metallicText.style.color = "white";
      }
      else if (sliderValue === 2) {
        body.style.backgroundColor = "orange";
        sliderSpanColorChanger("black");
        headline.style.color = "black";
        modelText.style.color = "black";
        metallicText.style.color = "black";
      }
      else if (sliderValue === 3) {
        body.style.backgroundColor = "yellow";
        sliderSpanColorChanger("black");
        headline.style.color = "black";
        modelText.style.color = "black";
        metallicText.style.color = "black";
      }
      else if (sliderValue === 4) {
        body.style.backgroundColor = "green";
        sliderSpanColorChanger("white");
        headline.style.color = "white";
        modelText.style.color = "white";
        metallicText.style.color = "white";
      }
      else if (sliderValue === 5) {
        body.style.backgroundColor = "blue";
        sliderSpanColorChanger("white");
        headline.style.color = "white";
        modelText.style.color = "white";
        metallicText.style.color = "white";
      }
      else if (sliderValue === 6) {
        body.style.backgroundColor = "indigo";
        sliderSpanColorChanger("white");
        headline.style.color = "white";
        modelText.style.color = "white";
        metallicText.style.color = "white";
      }
      else if (sliderValue === 7) {
        body.style.backgroundColor = "violet";
        sliderSpanColorChanger("black");
        headline.style.color = "black";
        modelText.style.color = "black";
        metallicText.style.color = "black";
      }
      else if (sliderValue >= 8) {
        body.style.backgroundColor = "white";
        sliderSpanColorChanger("black");
        headline.style.color = "black";
        modelText.style.color = "black";
        metallicText.style.color = "black";
      }
    }
  }

  const renderSpanText = () => {
      return <span id="spans">Manufacturing Year: {yearValue}</span>;
  };

  const saveSliderValuesToXML = () => {
    var postColor;
    var postFuelType;
    var postLocation;
    var postWarranty;

    if (colorNames[sliderValue] === "Indigo") {
      postColor = "Koyu Mor";
    }
    else if (colorNames[sliderValue] === "Black") {
      postColor = "Siyah";
    }
    else if (colorNames[sliderValue] === "Red") {
      postColor = "Kırmızı";
    }
    else if (colorNames[sliderValue] === "Orange") {
      postColor = "Turuncu";
    }
    else if (colorNames[sliderValue] === "Yellow") {
      postColor = "Sarı";
    }
    else if (colorNames[sliderValue] === "Green") {
      postColor = "Siyah";
    }
    else if (colorNames[sliderValue] === "Blue") {
      postColor = "Açık Mavi";
    }
    else if (colorNames[sliderValue] === "Violet") {
      postColor = "Mavi";
    }
    else if (colorNames[sliderValue] === "White") {
      postColor = "Beyaz";
    }
    else {
      postColor = "undefined";
    }

    if (fuelNames[fuelValue] === "Diesel") {
      postFuelType = "Dizel";
    }
    else if (fuelNames[fuelValue] === "Gasoline") {
      postFuelType = "Benzin";
    }
    else if (fuelNames[fuelValue] === "LPG") {
      postFuelType = "LPG";
    }
    else {
      postFuelType = "undefined";
    }

    if (locationNames[locationValue] === "Mediterranean Region") {
      postLocation = "Akdeniz Bölgesi";
    }
    else if(locationNames[locationValue] === "Marmara Region") {
      postLocation = "Marmara Bölgesi";
    }
    else if(locationNames[locationValue] === "Black Sea Region") {
      postLocation = "Karadeniz Bölgesi";
    }
    else if(locationNames[locationValue] === "Aegean Region") {
      postLocation = "Ege Bölgesi";
    }
    else if(locationNames[locationValue] === "Central Anatolia") {
      postLocation = "İç Anadolu Bölgesi";
    }
    else if(locationNames[locationValue] === "Southeastern Anatolia") {
      postLocation = "GüneyDoğu Anadolu Bölgesi";
    }
    else {
      postLocation = "undefined";
    }

    if (warrantyNames[warrantyValue] === "No warranty") {
      postWarranty = "Garantisiz";
    }
    else if (warrantyNames[warrantyValue] === "3 months") {
      postWarranty = "1 Yıla kadar"
    }
    else if (warrantyNames[warrantyValue] === "6 months") {
      postWarranty = "1 Yıla kadar"
    }
    else if (warrantyNames[warrantyValue] === "1 year") {
      postWarranty = "1 YIldan uzun"
    }
    else {//warrantyNames[warrantyValue] === "DS warranty"
      postWarranty = "1 YIldan uzun"
    }

    var SelectedValue = document.getElementById("models").value;
    var CapacityValue = document.getElementById("capacity").value;
    var DriveTrainValue = document.getElementById("drivetrain").value;
    var TorqueValue = document.getElementById("tork").value;
    var CylinderValue = document.getElementById("cylinder").value;
    var GearboxValue = document.getElementById("gearbox").value;
    if (brandNames[brandValue] === "HYUNDAI") {
      brandNames[brandValue] = "HYUNDAİ";
    }

    // Get slider values
    const sliderValues = [postColor, postFuelType, yearValue, postWarranty, brandNames[brandValue] + " " + SelectedValue, postLocation, speedValue, postMetallic, CapacityValue, DriveTrainValue, TorqueValue, CylinderValue, GearboxValue];
  
    // Define tag names for each value
    const tagNames = ['Renk', 'Yakit', 'Model_Yili', 'Garanti', 'Marka', 'Konum', 'Hiz', 'Metalic', 'Depo', 'Aktarma', 'MaksTork', 'Silindir', 'Şanzıman'];

    // Create XML object
    const xmlObject = {
      carProperties: sliderValues.map((value, index) => ({
          [tagNames[index]]: {
            _text: value,
          },
        })),
      };
  
    // Convert XML object to XML string
    const xmlString = js2xml(xmlObject, { compact: true, spaces: 4 });
  
    // Save XML string to file using FileSaver.js
    // const blob = new Blob([xmlString], { type: 'application/xml' });
    // saveAs(blob, 'slider_values.xml');
    // These 2 lines saves an xml file for testing purposes

    fetch('http://localhost:5000/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(xmlString)
    }).then(response => response.json())
      .then(data => {
        const result = data.result; // Extract the result number
        const numberString = result.match(/\[(.*?)\]/)[1];
        const inflation = parseInt(numberString, 10) * 3;
        var roundedDown = Math.round(inflation / 1000000) * 1000000;;
        var roundedUp = Math.round(inflation / 10000) * 10000;
        progressBar(roundedDown, roundedUp, postColor, postFuelType, brandNames[brandValue], SelectedValue, postLocation, speedValue, postMetallic, yearValue, CapacityValue, DriveTrainValue, TorqueValue, CylinderValue, GearboxValue);
      });
  }
  
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

  function resetFunction() {
    // eslint-disable-next-line no-restricted-globals
    setTimeout(() => location.reload(), 1);
    alert("Values reset!");
  }

  function progressBar(priceD, priceU, color, fuel, brand, model, location, speed, metal, year, capacity, drivetrain, torque, cylinder, gearbox) {
    var elem = document.getElementById("myBar");
    var i = 0;
    if (i === 0) {
      i = 1;
      var width = 1;
      var id = setInterval(frame, 50);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          var newResult = document.createElement('div');
          newResult.id = 'lastResult';
          if (priceD > priceU) {
            var temp = priceU;
            priceD = priceU;
            priceU = temp;
          } 
          if (priceD === priceU) {
            priceU = priceD * 1.1;
            var convertedNumber = Math.floor(priceU);
            priceU = convertedNumber;
          }
          newResult.style.width = '750px';
          newResult.innerHTML = 'Tahmini fiyat: ' + priceD + '₺ - ' + priceU + '₺<br><span class="second-line">Özellikler:</span> ' + year + ' ' + brand + ' ' + model + ', ' + color + ', ' + fuel + ', ' + location + ', ' + speed + ' Hız, ' + capacity + ' LT, ' + drivetrain + ', ' + torque + ' Tork, ' + cylinder + ' Silindir, ' + gearbox;
          var parentElement = document.getElementById('home');
          parentElement.appendChild(newResult);
          if (color === "Siyah") {
            newResult.style.color = "white";
          } else if (color === "Beyaz") {
            newResult.style.color = "black";
          } else if (color === "Koyu Mor") {
            newResult.style.color = "white";
          } else if (color === "Açık Mavi") {
            newResult.style.color = "white";
          } else if (color === "Kırmızı") {
            newResult.style.color = "white";
          }
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
    var home = document.getElementById("home");
    var progress = document.getElementById("myProgress");
    var speedC = document.getElementById("speedContainer");
    var header = document.getElementById("headline");
    var nav = document.getElementById("navbarID");
    if (home !== "undefined" && home !== null &&
        progress !== "undefined" && progress !== null &&
        header !== "undefined" && header !== null) {
      home.style.visibility = "hidden";
      progress.style.visibility = "visible";
      speedC.style.visibility = "hidden";
      header.style.visibility = "hidden";
      nav.style.visibility = "hidden";
    }
  }

  return (
    <>
      <div id="myProgress">
        <div id="myBar"></div>
      </div>
      <div id='home'>
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
              <div id="driveTrainSelect">
              <label id="driveLabel" htmlFor="drivetrain">Drivetrain:</label>
                <select id="drivetrain" name="drivetrain">
                  <option value="Önden Çekiş">Front-Wheel Drive (FWD)</option>
                  <option value="Arkadan İtiş">Rear-Wheel Drive (RWD)</option>
                  <option value="4x4">Four-Wheel Drive (4WD)</option>
                </select>
              </div>
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
              <div id="BoxContainer">
                <input type="checkbox" id='metallicBox' name="metallicBox" value="metallic" onChange={handleBox}
                />
                <label id="metallicText" htmlFor="metallicBox"> Metallic</label>
              </div>
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
              <div id="capacitySelect">
              <label id="capacityLabel" htmlFor="capacity">Capacity:</label>
                <select id="capacity" name="capacity">
                  <option value="37">35-40 LT</option>
                  <option value="42">40-45 LT</option>
                  <option value="47">45-50 LT</option>
                  <option value="52">50-55 LT</option>
                  <option value="57">55-60 LT</option>
                  <option value="62">60-65 LT</option>
                  <option value="67">65-70 LT</option>
                  <option value="75">70-80 LT</option>
                  <option value="85">80-90 LT</option>
                  <option value="95">90-100 LT</option>
                </select>
              </div>
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
              <div id="modelSelect">
              <label id="modelLabel" htmlFor="models">Choose a model:</label>
                <select id="models" name="models">
                  <option value="Corolla">Corolla</option>
                  <option value="Yaris">Yaris</option>
                  <option value="C-HR">C-HR</option>
                </select>
              </div>
            </label>

            <img id="map" src={map} alt="Map" />
          </section>
        </div>
      <Fragment>
            <Button id="resetButton" role="button" onClick={resetFunction} filled >Reset</Button>
            <Button id="carButton" as="a" onClick={saveSliderValuesToXML} filled >Carculate</Button>
      </Fragment>
      </div>
    </>
  );
}

export default SliderButton;