function subarraySum(nums: number[], k: number): number {
  let result: number = 0;
  const prefixMap = new Map<number, number>();
  prefixMap.set(0, 1);

  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (prefixMap.has(prefixSum - k)) {
      result += prefixMap.get(prefixSum - k)!;
    }

    prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
  }

  return result;
}
