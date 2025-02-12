/*
Чтобы набрать форму к лету, Виктория решила бегать каждый день. До лета осталось всего n дней — именно на протяжении этого срока она и будет бегать. Её личный тренер уже составил ей расписание: в i-ый день Виктория должна пробежать a_i километров.
Виктория считает (3 ≤ i ≤ n) дней хорошими, если в этот день она пробежит не меньше, чем в первый день, и не больше, чем во второй день. Расписание же ей понравится, если хотя бы m дней будут хорошими.
В рассписании можно делать корректировки: произвольное a_i (1 ≤ i ≤ n) можно увеличивать или уменьшать на 1 километр. Разрешается корректировать один и тот же день несколько раз.

Какое минимальное количество корректировок необходимо внести в расписание, чтобы оно понравилось Виктории?
Формат входных данных
Первая строка содержит числа n (3 ≤ n ≤ 2 × 10^5) и m (1 ≤ m ≤ n − 2) — количество дней до лета и количество хороших дней, которое необходимо Виктории, чтобы ей понравилось расписание.

Следующая строка содержит числа a_1, a_2, ..., a_n (1 ≤ a_i ≤ 10^9), где a_i — количество километров, которое должна пробежать Виктория согласно начальному расписанию.

Формат выходных данных
Выведите одно число — минимальное количество корректировок, которое необходимо внести в расписание, чтобы оно понравилось Виктории.
Комментарий к примеру
В примере можно дважды уменьшить a_3 на единицу, чтобы расписание понравилось Виктории.

Примеры данных
Ввод:
3 1
3 4 6 

Вывод:
2
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getMinCorrections = (n, m, arr) => {
  const days = arr.slice(2);
  days.sort((x, y) => x - y);

  const minDistance = arr[0];
  const maxDistance = arr[1];
  let minCorrections = Infinity;

  for (let i = 0; i <= days.length - m; i++) {
    const currentWindow = days.slice(i, i + m);
    const minWindow = currentWindow[0];
    const maxWindow = currentWindow[m - 1];

    const minValue = Math.min(minDistance, minWindow);
    const maxValue = Math.max(maxDistance, maxWindow);

    const correctionsA1 = minDistance - minValue;
    const correctionsA2 = maxValue - maxDistance;
    const corrections = correctionsA1 + correctionsA2;

    minCorrections = Math.min(corrections, minCorrections);
  }

  return minCorrections;
};

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const [n, m] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  console.log(getMinCorrections(n, m, arr));
});

// const test0 = [3, 1, [3, 4, 6]];
// const test1 = [10, 5, [3, 7, 12, 11, 32, 10, 12, 9, 8, 72]];
// const test2 = [10, 5, [3, 7, 12, 2, 32, 10, 12, 9, 8, 5]];
// const test3 = [8, 5, [10, 13, 11, 14, 0, 5, 1, 80]];
// const test4 = [9, 5, [10, 13, 11, 14, 0, 4, 5, 1, 80]];
// const test5 = [9, 5, [4, 7, 52, 53, 6, 6, 8, 3, 3]];

// console.log(getMinCorrections(...test0)); // 2
// console.log(getMinCorrections(...test1)); // 5
// console.log(getMinCorrections(...test2)); // 4
// console.log(getMinCorrections(...test3)); // 11
// console.log(getMinCorrections(...test4)); // 10
// console.log(getMinCorrections(...test5)); // 2
