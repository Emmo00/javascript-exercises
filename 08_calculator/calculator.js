const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  return arr.reduce((sum, element) => (sum += element), 0);
};

const multiply = function (...numbers) {
  return numbers.reduce((product, element) => product * element, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  if (number == 0) return 1;
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
