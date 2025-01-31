export function isPalindrome(s: string): boolean {
  const clean = s.replace(/[^a-z0-9]+/gi, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
}
