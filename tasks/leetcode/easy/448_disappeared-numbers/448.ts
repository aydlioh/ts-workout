export function findDisappearedNumbers(nums: number[]): number[] {
  const set: Set<number> = new Set();
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }

  return result;
}
