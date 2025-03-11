// 1
export function climbStairsNormal(n: number): number {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    const current = first + second;
    first = second;
    second = current;
  }

  return second;
}

// 2
export function climbStairsReq(n: number): number {
  if (n <= 2) return n;
  return climbStairsReq(n - 1) + climbStairsReq(n - 2);
}

// 3
export function climbStairs(n: number): number {
  if (n <= 1) {
    return 1;
  }

  const dp: number[] = new Array(n + 1).fill(-1);
  return climbStairsHelper(n, dp);
}

function climbStairsHelper(n: number, dp: number[]): number {
  if (n <= 1) {
    return 1;
  }
  if (dp[n] !== -1) {
    return dp[n];
  }

  dp[n] = climbStairsHelper(n - 1, dp) + climbStairsHelper(n - 2, dp);
  return dp[n];
}
