function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
      if (start === i) {
        result.push(`${nums[i]}`);
      } else {
        result.push(`${nums[start]}->${nums[i]}`);
      }
      start = i + 1;
    }
  }

  return result;
}
