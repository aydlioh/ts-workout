function longestSubarray(nums: number[]): number {
  let result = 0;
  let left = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    result = Math.max(result, right - left);
  }

  return result;
}

// Good
function longestSubarray2(nums: number[]): number {
  let result = 0;
  let lastZero = -1;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      left = lastZero + 1;
      lastZero = right;
    }

    result = Math.max(result, right - left);
  }

  return result;
}
