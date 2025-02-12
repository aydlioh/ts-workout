/*
Согласно законам неизвестного государства T каждый совершеннолетний гражданин должен уметь складывать и умножать числа.
Дан массив a_1, a_2, ..., a_n.
Для каждого p от 1 до k рассмотрим следующий процесс:

* для всех i, j таких, что 1 ≤ i < j ≤ n выпишем пары (a_i, a_j);
* в полученной последовательности каждую пару заменим на сумму ее элементов;
* в очередной последовательности каждый элемент возведем в p-ю степень;
* сложим все числа итоговой последовательности;
* заменим значение на его остаток при делении на 998244353.

Обозначим результат за f(p). Найдите значения f(1), f(2), ..., f(k).

Формат входных данных

Первая строка содержит числа n (2 ≤ n ≤ 2 * 10^5) и k (1 ≤ k ≤ 300).

Вторая строка содержит числа a_1, a_2, ..., a_n (1 ≤ a_i ≤ 10^8).

Формат выходных данных

Выведите f(1), f(2), ..., f(k), каждое в новой строке.

Комментарий к примеру

Значение f(2) было получено следующим образом:

после выписывания пар получается последовательность (2, 3), (2, 4), (3, 4);
после замены каждой пары на сумму элементов получается набор значений 5, 6, 7;
после возведения в квадрат получаются числа 25, 36, 49;
сумма полученных значений равняется 110;
остаток при делении 110 на 998244353 равен 110.

Примеры данных

Ввод
3 3
2 3 4

Вывод
18
110
684
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const modPow = (base, exp, mod) => {
  let result = 1n;
  base = base % mod;
  while (exp > 0n) {
    if (exp % 2n === 1n) {
      result = (result * base) % mod;
    }
    base = (base * base) % mod;
    exp = exp / 2n;
  }
  return result;
};

const DEFAULT_MOD = 998244353n;
const DEFAULT_INV = 499122177n;

const F = (n, k, arr) => {
  const results = [];

  const fact = new Array(k + 1).fill(1n);
  for (let i = 1n; i <= k; i++) {
    fact[i] = (fact[i - 1n] * i) % DEFAULT_MOD;
  }

  const invFact = new Array(k + 1).fill(1n);
  invFact[k] = modPow(fact[k], DEFAULT_MOD - 2n, DEFAULT_MOD);
  for (let i = BigInt(k) - 1n; i >= 0n; i--) {
    invFact[i] = (invFact[i + 1n] * (i + 1n)) % DEFAULT_MOD;
  }

  const S = new Array(k + 1).fill(0n);

  for (const num of arr) {
    const x = num % DEFAULT_MOD;
    let pow = 1n;
    for (let i = 0; i <= k; i++) {
      S[i] = (S[i] + pow) % DEFAULT_MOD;
      pow = (pow * x) % DEFAULT_MOD;
    }
  }

  for (let i = 1; i <= k; i++) {
    let total = 0n;
    for (let j = 0; j <= i; j++) {
      const c =
        (((fact[i] * invFact[j]) % DEFAULT_MOD) * invFact[i - j]) % DEFAULT_MOD;
      const term = (S[j] * S[i - j]) % DEFAULT_MOD;
      total = (total + c * term) % DEFAULT_MOD;
    }
    const correction =
      (modPow(2n, BigInt(i), DEFAULT_MOD) * S[i]) % DEFAULT_MOD;
    total = (total - correction + DEFAULT_MOD) % DEFAULT_MOD;

    results.push(Number((total * DEFAULT_INV) % DEFAULT_MOD));
  }

  return results;
};

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const [n, k] = input[0].split(' ').map(Number);
  const a = input[1].split(' ').map(BigInt);
  console.log(F(n, k, a).join('\n'));
});

const test0 = [3, 3, [2, 3, 4].map(BigInt)]; // 18 110 684
const test1 = [2, 1, [5, 10].map(BigInt)]; // 15
const test2 = [2, 2, [1, 1].map(BigInt)]; // 2 4
const test3 = [2, 1, [998244352, 2].map(BigInt)]; // 1
const test4 = [3, 2, [0, 0, 0].map(BigInt)]; // 0 0
const test5 = [2, 5, [1, 2].map(BigInt)]; // 3 9 27 81 243
const test6 = [4, 2, [1, 2, 3, 4].map(BigInt)]; // 30 160

console.log(F(...test0));
console.log(F(...test1));
console.log(F(...test2));
console.log(F(...test3));
console.log(F(...test4));
console.log(F(...test5));
console.log(F(...test6));
