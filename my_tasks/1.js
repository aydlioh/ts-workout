const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

const pipe = (arr) => {
  return (value) => arr.reduce((acc, fn) => fn(acc), value);
};

const one = pipe([times(2), times(3)]);
console.log(one(2)); // 12

const two = pipe([times(2), plus(3), times(4)]);
console.log(two(2)); // 28
