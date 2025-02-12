function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const ALPHALENGTH = 26;

  const s1Count = new Array(ALPHALENGTH).fill(0);
  const s2Count = new Array(ALPHALENGTH).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 97]++;
    s2Count[s2.charCodeAt(i) - 97]++;
  }

  let matches = 0;
  for (let i = 0; i < ALPHALENGTH; i++) {
    if (s1Count[i] === s2Count[i]) matches++;
  }

  let leftIndex = 0;
  for (let rightIndex = s1.length; rightIndex < s2.length; rightIndex++, leftIndex++) {
    if (matches === ALPHALENGTH) return true;

    let index = s2.charCodeAt(rightIndex) - 97;
    s2Count[index]++;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] + 1 === s2Count[index]) {
      matches--;
    }

    index = s2.charCodeAt(leftIndex) - 97;
    s2Count[index]--;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] - 1 === s2Count[index]) {
      matches--;
    }
  }

  return matches === ALPHALENGTH;
}
