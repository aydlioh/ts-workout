function isPalindrome(s: string): boolean {
  const clean = s.replace(/[^a-z0-9]+/gi, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
}

function isPalindrome2(s: string): boolean {
  const clean = s.replace(/[^a-z0-9]+/gi, '').toLowerCase();

  let left = 0;
  let right = clean.length - 1;
  while (left <= right) {
    if (clean[left] !== clean[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
