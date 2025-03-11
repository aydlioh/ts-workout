export class NumArray {
  public prefSums: number[];

  constructor(nums: number[]) {
    this.prefSums = nums;
    for (let i = 1; i < nums.length; i++) {
      this.prefSums[i] += this.prefSums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefSums[right] - (this.prefSums[left - 1] || 0);
  }
}

