export function subarraySum(nums: number[], k: number): number {
  let result = 0;
  let sum = 0;
  const map = new Map<number, number>();

  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result += map.get(sum - k) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return result;
}
