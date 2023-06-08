const fibonacci = function (fib_index) {
  let prev = 1;
  let last = 0;
  if (fib_index < 0) return "OOPS";
  for (let i = 0; i < fib_index; i++) {
    let tmp = last;
    last += prev;
    prev = tmp;
  }
  return last;
};

// Do not edit below this line
module.exports = fibonacci;
