function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('');
    if (map.has(sorted)) {
      map.get(sorted)!.push(strs[i]);
    } else {
      map.set(sorted, [strs[i]]);
    }
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
