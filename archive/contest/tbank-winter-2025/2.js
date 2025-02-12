/*
В самый что ни на есть обычный день Борис решил, что на протяжении следующих n дней он будет покупать своей маме букет ровно из трех цветов. Там, где живет Борис, существует всего лишь один магазин цветов, но зато в нем широкий ассортимент: для каждого i от 0 до 10^100 в магазине есть ровно один уникальный цветок, стоящий 2^i бурлей. К тому же в магазин ежедневно довозят цветы, которые были выкуплены.

В i-й день у Бориса есть a_i бурлей, которые он готов потратить на букет. Борис хочет купить как можно более дорогой букет. Для каждого из n дней определите, за какую стоимость Борис купит букет, или сообщите, что на его деньги невозможно купить никакой букет из трех цветов.

Формат входных данных
Первая строка содержит число n (1 ≤ n ≤ 10^5) — количество дней, в течение которых Борис планирует покупать букеты.
i-я из следующих n строк содержит число a_i (1 ≤ a_i ≤ 10^18) — количество бурлей, которое есть у Бориса в i-й день.

Формат выходных данных
Для каждого ai в отдельной строке выведите, сколько бурлей Борис потратит на букет в i-й день, или -1, если он не может купить никакой букет ровно из трех цветов.
Комментарий к примеру
в первый день Борис может купить цветы стоимостей 21, 22 и 23;
во второй день Борис может купить цветы стоимостей 20, 21 и 26;
в третий день Борис не может купить цветы таким образом, чтобы составить букет из трех цветов и уложиться в сумму в 5 бурлей.
Примеры данных
Ввод
3
15
67
5
Вывод
14 
67
-1
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getMaxPowerOfTwo = (value) => {
  const binaryStr = value.toString(2);
  return binaryStr.length - 1;
}

const maxFlowersCost = (budget) => {
  if (budget < 7n) return -1n;

  const maxPower = getMaxPowerOfTwo(budget);
  let sum = 0n;
  let remaining = budget;
  let count = 0;

  for (let i = maxPower; i >= 0; i--) {
    const flower = 1n << BigInt(i);
    if (flower <= remaining) {
      sum += flower;
      remaining -= flower;
      count++;
      if (count === 3) break;
    }
  }

  return count === 3 ? sum : -1n;
}

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const n = Number(input[0]);
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(maxFlowersCost(BigInt(input[i].trim())));
  }
  console.log(result.join('\n'));
});