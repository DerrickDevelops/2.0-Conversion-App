import React from 'react'
import './Layout.css'

const Content = () => {
    return (
        <content className="content-container">
            <div className="inputbox-container">
            <h3>Metric & Imperial</h3>
            <p>Unit conversion</p>
				<input type="number" id="inputvalue"/><br />
				<button className="convertbtn" id="btn" onClick="convertValue()">convert</button>
            </div>
            <div className="results-container">
            <div class="length results" id="leng">
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
        </content>
    )
}

export default Content