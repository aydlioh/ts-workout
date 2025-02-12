function numJewelsInStones(jewels: string, stones: string): number {
  const jewelSet = new Set(jewels);
  let result = 0;

  for (const stone of stones) {
    if (jewelSet.has(stone)) {
      result++;
    }
  }

  return result;
}
