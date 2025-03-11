export const singleNumber = (nums: number[]): number =>
  nums.reduce((acc, cur) => acc ^ cur, 0);

// 4 1 1
// 100 ^ 001 = 101 = 5
// 101 ^ 001 = 100 = 4
