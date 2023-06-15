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
        setInputValue(parseInt(event.target.value));
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
            <div id='OtherAtt'>
                <div id='c0'>
                    <label id='inputSpeed'>
                        Speed:
                    </label>
                    <input id='realInput' type="number" name="speednum" value={inputValue} onChange={handleInputChange} min="145" max="275"/>
                </div>
                <div id='c1'>
                    <label id="torkLabel" htmlFor="tork">Torque:</label>
                    <select id="tork" name="tork">
                        <option value="105">95-120</option>
                        <option value="130">120-145</option>
                        <option value="155">145-170</option>
                        <option value="180">170-195</option>
                        <option value="230">220-245</option>
                        <option value="255">245-270</option>
                        <option value="280">270-295</option>
                        <option value="305">295-320</option>
                        <option value="330">320-345</option>
                        <option value="355">345-370</option>
                        <option value="380">370-395</option>
                        <option value="405">395-420</option>
                        <option value="430">420-445</option>
                        <option value="455">445-470</option>
                        <option value="480">470-495</option>
                        <option value="505">495-520</option>
                        <option value="530">520-545</option>
                        <option value="555">545-570</option>
                        <option value="580">570-595</option>
                        <option value="605">595-620</option>
                    </select>
                </div>
                <div id='c2'>
                    <label id="CylinderLabel" htmlFor="cylinder">Cylinder:</label>
                    <select id="cylinder" name="cylinder">
                        <option value="3">3-cylinder</option>
                        <option value="4">4-cylinder</option>
                        <option value="5">5-cylinder</option>
                        <option value="6">6-cylinder</option>
                        <option value="7">7-cylinder</option>
                        <option value="8">8-cylinder</option>
                    </select>
                </div>
                <div id='c3'>
                    <label id="GearLabel" htmlFor="gearbox">Gearbox:</label>
                    <select id="gearbox" name="gearbox">
                        <option value="Manuel">Manual Transmission</option>
                        <option value="Otomatik">Automatic Transmission</option>
                    </select>
                </div>
            </div>
        </div>
    )
}