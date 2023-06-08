const removeFromArray = function (arr, ...number) {
  number.forEach((num) => {
    arr = arr.filter((element) => element !== num);
  });
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
