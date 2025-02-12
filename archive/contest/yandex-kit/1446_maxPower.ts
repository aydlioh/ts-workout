function maxPower(s: string): number {
  if (s.length === 0) return 0;

  let maxCount = 1;
  let currentCount = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 1;
    }
  }

  return maxCount;
}
