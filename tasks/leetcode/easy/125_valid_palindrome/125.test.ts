import { describe, it, expect } from 'vitest';
import { isPalindrome } from './125';

describe('125 - valid_palindrome', () => {
  it('returns true for a valid palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('returns false for an invalid palindrome', () => {
    expect(isPalindrome('not a palindrome')).toBe(false);
  });

  it('ignores non-alphanumeric characters', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('ignores case', () => {
    expect(isPalindrome('Able was I ere I saw Elba')).toBe(true);
  });
});
