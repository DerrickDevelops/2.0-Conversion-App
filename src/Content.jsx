import React from 'react'
import './Layout.css'

const Content = () => {
    return (
        <content className="content-container">
            <div className="inputbox-container">
            <h3>Metric & Imperial</h3>
            <p>Unit conversion</p>
				<input type="number" id="inputvalue" pattern="[0-9]*" value=""/><br />
				<button class="convertbtn" id="btn" onclick="convertValue()">convert</button>
            </div>
            <div class="results-container">
            <div class="length results" id="leng">
					<h5 class="title">Length (Meters/Feet)</h5>
					<p class="info" id="conversionleng"></p>
				</div>
				<div class="volume results" id="vol">
					<h5 class="title">Volume (Liters/Gallons)</h5>
					<p class="info" id="conversionvol"></p>
				</div>
				<div class="mass results" id="mass">
					<h5 class="title">Mass (Kilograms/Pounds)</h5>
					<p class="info" id="conversionmass"></p>
				</div>
            </div>
        </content>
    )
}

export default Content