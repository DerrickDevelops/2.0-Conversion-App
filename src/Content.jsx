import React, { useState } from 'react';
import './Layout.css';

const MainContent = () => {
    // State to store the input value
    const [inputValue, setInputValue] = useState('');

    // Function to handle the conversion
    const handleConvert = () => {
        // Convert the input value here
        const meterValue = (inputValue * 3.218).toFixed(2);
        const feetValue = (inputValue * 0.304).toFixed(2);
        const literValue = (inputValue * 0.264).toFixed(2);
        const gallonValue = (inputValue * 3.785).toFixed(2);
        const kiloValue = (inputValue * 2.2).toFixed(2);
        const poundsValue = (inputValue * 0.453).toFixed(2);

        // Update the content of elements with the "info" class
        document.getElementById('conversionleng').innerText = `${inputValue} Meters = ${meterValue} Feet | ${inputValue} Feet = ${feetValue} Meters`;
        document.getElementById('conversionvol').innerText = `${inputValue} Liters = ${literValue} Gallons | ${inputValue} Gallons = ${gallonValue} Liters`;
        document.getElementById('conversionmass').innerText = `${inputValue} Kilos = ${kiloValue} Pounds | ${inputValue} Pounds = ${poundsValue} Kilograms`;
    };

    // Function to handle input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <main className="content-container">
            <div className="inputbox-container">
                <h3>Metric & Imperial</h3>
                <p>Unit conversion</p> 
                <input type="number" id="inputvalue" value={inputValue} onChange={handleInputChange} /><br />
                <button className="convertbtn" id="btn" onClick={handleConvert}>Convert</button>
            </div>
            <div className="results-container">
                <div className="length results" id="leng">
                    <h5 className="title">Length (Meters/Feet)</h5>
                    <p className="info" id="conversionleng"></p>
                </div>
                <div className="volume results" id="vol">
                    <h5 className="title">Volume (Liters/Gallons)</h5>
                    <p className="info" id="conversionvol"></p>
                </div>
                <div className="mass results" id="mass">
                    <h5 className="title">Mass (Kilograms/Pounds)</h5>
                    <p className="info" id="conversionmass"></p>
                </div>
            </div>
        </main>
    );
}

export default MainContent;
