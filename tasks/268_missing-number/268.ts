export function missingNumber(nums: number[]): number {
  const maxNum = Math.max(...nums);
  if (maxNum + 1 === nums.length) return nums.length;
  const summary = nums.reduce((prev, curr) => prev + curr, 0);
  return (maxNum * (maxNum + 1)) / 2 - summary;
}
