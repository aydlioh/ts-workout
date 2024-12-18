const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const decodeReqursive = (s) => {
  if (s.length === 0) return '';
  if (s.length === 1) return s[0];

  let middleIndex = 0;

  if (s.length % 2 === 0) {
    middleIndex = Math.floor(s.length / 2) - 1;
  } else {
    middleIndex = Math.floor(s.length / 2);
  }

  const middleElement = s[middleIndex];
  const leftElements = decodeReqursive(s.slice(0, middleIndex));
  const rightElements = decodeReqursive(s.slice(middleIndex + 1));

  return middleElement + leftElements + rightElements;
};

const encodeRecursive = (S) => {
  const length = S.length;

  if (length <= 1) return S;

  const middleIndex = Math.floor((length - 1) / 2);

  const middleElement = S[0];
  const leftElements = encodeRecursive(S.slice(1, middleIndex + 1));
  const rightElements = encodeRecursive(S.slice(middleIndex + 1));

  return leftElements + middleElement + rightElements;
};

rl.question('', (input) => {
  console.log(encodeRecursive(input));
  rl.close();
});
