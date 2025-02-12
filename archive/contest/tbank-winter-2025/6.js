/*
В этом году главой Флатландии является Егор. Всего во Флатландии проживает n людей, каждый в своем доме. i-й дом находится в целочисленной точке (xi, yi).

Егор может выделять некоторые тройки людей. Требуется лишь, чтобы каждый человек относился не более, чем к одной тройке. Тройка людей считается счастливой, если треугольник, образованный их домами, является невырожденным (то есть три дома не находятся на одной прямой).

Помогите Егор определить, какого максимального количества счастливых троек можно добиться во Флатландии.

Формат входных данных
Первая строка содержит число n (3 ≤ n ≤ 300) — количество жителей во Флатландии.

i-я из следующих n строк содержит числа xi, yi ( -10^9 ≤ xi, yi ≤ 10^9) — координаты дома, где проживает i-й человек.

Гарантируется, что никакие два дома не находятся в одной точке.

Формат выходных данных
Выведите одно число — максимальное количество счастливых троек, которого можно добиться во Флатландии.

Комментарий к примеру
В примере можно получить две счастливые тройки. Например, подойдет разбиение (1, 1), (2, 2), (1, 4) и (6, 3), (4, 5), (4, 1).

Примеры данных

Вход
7
1 1
2 2
1 4
6 3
4 5
4 1
3 3

Вывод
2
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const maxHappyFamilies = (n, points) => {
  if (n < 3) {
    return 0;
  }

  let maxCollinear = 2;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let count = 2;
      const p1 = points[i];
      const p2 = points[j];
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;
        const p3 = points[k];
        const area =
          (p2[0] - p1[0]) * (p3[1] - p1[1]) - (p2[1] - p1[1]) * (p3[0] - p1[0]);
        if (area === 0) {
          count++;
        }
      }
      if (count > maxCollinear) {
        maxCollinear = count;
      }
    }
  }

  if (maxCollinear === n) {
    return 0;
  }

  const m = maxCollinear;
  const k = n - m;

  const a = Math.min(k, Math.floor(m / 2));
  const mRemaining = m - 2 * a;
  const kRemaining = k - a;

  const additional =
    kRemaining > 0 ? Math.floor((mRemaining + kRemaining) / 3) : 0;
  const total = a + additional;

  const answer = Math.min(Math.floor(n / 3), total);
  return answer;
}

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const n = parseInt(input[0]);
  const points = input.slice(1).map((line) => line.split(' ').map(Number));
  console.log(maxHappyFamilies(n, points));
});

// 7
// 1 1
// 2 2
// 1 4
// 6 3
// 4 5
// 4 1
// 3 3
// Отв 2

// 7
// 1 1
// 2 2
// 3 3
// 4 4
// 5 5
// 6 6
// 9 3
// Отв 1

// 6
// 0 0
// 1 0
// 0 1
// 1 1
// 2 0
// 0 2
// Отв 2
