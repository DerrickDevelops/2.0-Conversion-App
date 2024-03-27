/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
document.body.appendChild(convertedEl)
*/

let inputValue = document.getElementById('inputvalue');
let btnEl = document.getElementById('btn');
let infoEl = document.querySelector('info');
let lengEl = document.getElementById('conversionleng');
let volEl = document.getElementById('conversionvol')
let massEl = document.getElementById('conversionmass')

function convertValue() {
	let value = +inputValue.value;


    let meterValue = (value * 3.218).toFixed(2);
    let feetValue = (value * 0.304).toFixed(2)
   
   lengEl.innerText = value + " " + "Meters = " + meterValue + " Feet" + " | " + value + " " + "Feet = " + feetValue + " Meters";

   literValue = (value * 0.264).toFixed(2);
   gallonValue = (value * 3.785).toFixed(2)
   
   volEl.innerText = value + " " + "Liters = " + literValue + " Gallons" + " | " + value + " " + "Gallons = " + gallonValue + " Liters";

   kiloValue = (value * 2.2).toFixed(2);
   poundsValue = (value * 0.453).toFixed(2)
   
   massEl.innerText = value + " " + "Kilos = " + kiloValue + " Pounds" + " | " + value + " " + "Pounds = " + poundsValue + " Kilograms";


	// console.log(typeof value)
}
