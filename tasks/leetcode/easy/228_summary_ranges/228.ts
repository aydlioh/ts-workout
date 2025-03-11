export function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];

  if (nums.length === 0) return result;
  if (nums.length === 1) return [nums[0].toString()];

  let start = nums[0];
  let end = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === end + 1) {
      end = nums[i];
    } else {
      if (start === end) result.push(start.toString());
      else result.push(`${start}->${end}`);
      start = nums[i];
      end = nums[i];
    }
  }

  if (start === end) result.push(start.toString());
  else result.push(`${start}->${end}`);

  return result;
}


function summaryRanges2(nums: number[]): string[] {
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
