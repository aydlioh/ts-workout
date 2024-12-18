const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Использую регулярное выражение, чтобы избавиться от знаков препинания и получить чистый массив слов различной длины.
const wordRegex = /\b\w+\b/g;

const Fan = {
  Spartak: 'spartak',
  Zenit: 'zenit',
  Dinamo: 'dinamo',
};

const identifyFan = (comment) => {
  const words = comment.toLowerCase().match(wordRegex) || [];
  let spartakCount = 0;
  let zenitCount = 0;

  for (let word of words) {
    if (word === Fan.Spartak) {
      spartakCount++;
    } else if (word === Fan.Zenit) {
      zenitCount++;
    }
  }

  if (spartakCount > zenitCount) {
    return Fan.Spartak;
  } else if (zenitCount > spartakCount) {
    return Fan.Zenit;
  }
  return Fan.Dinamo;
};

rl.question('', (answer) => {
  console.log(identifyFan(answer));
  rl.close();
});
