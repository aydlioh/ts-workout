function sortedSquaresBasic(nums: number[]): number[] {
  return nums.map((num) => num * num).sort((a, b) => a - b);
}

export function sortedSquares(nums: number[]): number[] {
  const result = new Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }

    index--;
  }

  return result;
}
