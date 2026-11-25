// The formula to convert from Fahrenheit to Celsius is (tempFahrenheit - 32) * 5/9.
// The formula to convert from Celsius to Fahrenheit is tempCelsius * 9/5 + 32;
// To round a number to one decimal we apply Math.round(number * 10) / 10. Math.round
// slashes all the decimals of a floating point number so first we multiply that number 
// with 10 to obtain the first digit before slashing. Then we divide by 10 to get back 
// the floating point between the integer value and the first decimal.

const convertToCelsius = function(tempFahrenheit) {
  return Math.round((tempFahrenheit - 32) * 5/9 * 10) / 10;
};

const convertToFahrenheit = function(tempCelsius) {
  return Math.round((tempCelsius * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
