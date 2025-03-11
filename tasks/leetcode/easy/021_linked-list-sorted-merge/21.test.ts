import { describe, it, expect } from 'vitest';
import { mergeTwoLists, ListNode } from './21';

describe('mergeTwoLists сливает два отсортированных связанных списка', () => {
  it('сливает два отсортированных связанных списка', () => {
    const one = new ListNode(3);
    const two = new ListNode(2, one);
    const three = new ListNode(1, two);

    const four = new ListNode(5);
    const five = new ListNode(4, four);

    const result = mergeTwoLists(three, five);

    expect(result?.val).toBe(1);
    expect(result?.next?.val).toBe(2);
    expect(result?.next?.next?.val).toBe(3);
    expect(result?.next?.next?.next?.val).toBe(4);
    expect(result?.next?.next?.next?.next?.val).toBe(5);
  });

  it('возвращает null если list1 null', () => {
    const four = new ListNode(4);
    const five = new ListNode(5, four);

    const result = mergeTwoLists(null, five);

    expect(result).toEqual(five);
  });

  it('возвращает null если list2 null', () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);

    const result = mergeTwoLists(three, null);

    expect(result).toEqual(three);
  });

  it('возвращает null если оба списка null', () => {
    const result = mergeTwoLists(null, null);

    expect(result).toBeNull();
  });
});
