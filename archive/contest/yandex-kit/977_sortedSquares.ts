function sortedSquares(nums: number[]): number[] {
  const result: number[] = new Array(nums.length).fill(0);
  let index = nums.length - 1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const leftValue = nums[left] ** 2;
    const rightValue = nums[right] ** 2;

    if (leftValue > rightValue) {
      result[index] = leftValue;
      left++;
    } else {
      result[index] = rightValue;
      right--;
    }

    index--;
  }

  return result;
}
