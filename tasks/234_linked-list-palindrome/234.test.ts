import { describe, it, expect } from 'vitest';
import { isPalindrome, ListNode } from './234';

describe('isPalindrome проверяет, является ли связанный список палиндромом', () => {
  it('возвращает true, если связанный список является палиндромом', () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);
    const four = new ListNode(2, three);
    const five = new ListNode(1, four);

    expect(isPalindrome(five)).toBeTruthy();
  });

  it('возвращает false, если связанный список не является палиндромом', () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);
    const four = new ListNode(4, three);

    expect(isPalindrome(four)).toBeFalsy();
  });

  it('возвращает true, если связанный список содержит один элемент', () => {
    const one = new ListNode(1);

    expect(isPalindrome(one)).toBeTruthy();
  });

  it('возвращает true, если связанный список пуст', () => {
    expect(isPalindrome(null)).toBeTruthy();
  });
});
