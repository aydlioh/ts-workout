/* Недавно маленький Антон научился читать некоторые буквы! Точнее, он научился читать буквы R, S и М. Кроме того, набор из трех букв R, S, M ему кажется правильным, если в нем символ R находится раньше, чем символ М.

Определите, является ли строка в правильной по мнению Антона.

Формат входных данных
Дана строка из трех символов, содержащая один символ R, один символ S и один символ М.

Формат выходных данных
Выведите Yes, если символ R находится в строке раньше, чем символ М. В противном случае выведите No.

Примеры данных
Пример 1
Ввод
SMR
Вывод
No
Пример 2
Ввод
RSM
Вывод
Yes
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isCorrectString = (input) => {
  return input.indexOf('R') < input.indexOf('M') ? 'Yes' : 'No';
};

rl.question('', (input) => {
  console.log(isCorrectString(input));
  rl.close();
});

// Примеры
// console.log(isCorrectString('SMR')); // NO
// console.log(isCorrectString('RSM')); // YES

// console.log(isCorrectString('MRS')); // NO
// console.log(isCorrectString('SRM')); // YES
