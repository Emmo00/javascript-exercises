const convertToCelsius = function (fahrenheit) {
  let result = ((fahrenheit - 32) * (5 / 9)).toFixed(1);
  return Number(result);
};

const convertToFahrenheit = function (celsius) {
  let result = (celsius * (9 / 5) + 32).toFixed(1);
  return Number(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
