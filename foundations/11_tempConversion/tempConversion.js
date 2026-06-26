const convertToCelsius = function(numToConvert) {
	let numInCelsius = (numToConvert - 32) / 1.8;
	let roundUpTemp = Math.round(numInCelsius * 10) / 10;
	return roundUpTemp;
};

const convertToFahrenheit = function(numToConvert) {
	let numInFahrenheit = numToConvert * 1.8 + 32;
	let roundUpTemp = Math.round(numInFahrenheit * 10) / 10;
	return roundUpTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
