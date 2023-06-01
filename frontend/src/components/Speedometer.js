import React, { useState } from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import './Speedo.css';

export function Speedo() {
    var [inputValue, setInputValue] = useState(170);
    var slider3 = document.getElementById("range-slider3");
    var textColor = '#000000';
    if (slider3 != null) {
        if (slider3.value >= 9) {
            textColor = '#808080';
        } else if (slider3.value <= 3) {
            textColor = '#ffffff';
        } else {
            textColor = '#ADD8E6';
        }
    }

    if (inputValue <= 145) {
        inputValue = 145;
    } else if (inputValue > 275) {
        inputValue = 275;
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

    return (
        <div id='speedContainer'>
            <ReactSpeedometer
                id="meterValue"
                forceRender={true}
                maxValue={275}
                minValue={145}
                value={inputValue}
                needleColor="red"
                startColor="green"
                segments={10}
                endColor="blue"
                currentValueText="Max Speed: #{value}"
                currentValuePlaceholderStyle={'#{value}'}
                textColor={textColor}
            />
            <label id='inputSpeed'>
                Value:
                <input id='realInput' type="number" name="speednum" value={inputValue} onChange={handleInputChange} min="145" max="275"/>
            </label>
        </div>
    )
}