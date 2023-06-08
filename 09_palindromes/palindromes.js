const palindromes = function (string) {
  string = string.toLowerCase();
  string = string
    .split("")
    .filter(
      (element, index) =>
        string.charCodeAt(index) > 96 && string.charCodeAt(index) < 123
    )
    .join("");
  let reverseString = string.split("").reverse().join("");
  if (string === reverseString) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
