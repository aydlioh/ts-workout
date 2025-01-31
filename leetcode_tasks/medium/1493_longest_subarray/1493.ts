function longestSubarrayBad(nums: number[]): number {
  if (!nums.length) return 0;

  let result = 0;
  const arr = nums.join('').split('0');

  if (arr.length === 1) return arr[0].length - 1;

  let temp = arr[0].length;

  for (let i = 1; i < arr.length; i++) {
    result = Math.max(result, temp + arr[i].length);
    temp = arr[i].length;
  }

  return result;
}

export function longestSubarray(nums: number[]): number {
  let left = 0;
  let result = 0;
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    result = Math.max(result, i - left);
  }

  return result;
}
