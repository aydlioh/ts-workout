// 1
export function countBits(n: number): number[] {
  const result: number[] = [];

  for (let i = 0; i <= n; i++) {
    let current = i;
    let count = 0;

    while (current !== 0) {
      current &= current - 1;
      count++;
    }
    result.push(count);
  }

  return result;
}

// Пример 1
// 9 & 8
// 1001 & 1000 (+ 1)
// 1000 = 8

// 8 & 7
// 1000 &  0111 (+ 1)
// 0

// Пример 2
// 13 & 12
// 1101 & 1100 (+1)
// 1100 = 12

// 12 & 11
// 1100 & 1011 (+1)
// 1000 = 8

// 8 & 7
// 1000 & 0111 (+1)
// 0

// 2
export function countBits2(n: number): number[] {
  const result: number[] = [];

  for (let i = 0; i <= n; i++) {
    let current = i;
    let count = 0;

    while (current !== 0) {
      count += current & 1;
      current >>= 1;
    }
    result.push(count);
  }

  return result;
}

// 3
export function countBits3(n: number): number[] {
  const res = new Uint8Array(n + 1);
  for (let i = 0; i < res.length; i++) res[i] = res[i >> 1] + (i & 1);
  return [...res];
}
