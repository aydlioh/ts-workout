import { describe, it, expect } from 'vitest';
import { ListNode, deleteDuplicates } from './83';

describe('deleteDuplicates удаляет дубликаты из связанного списка', () => {
  it('удаляет дубликаты из связанного списка', () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);
    const four = new ListNode(3, three);

    const result = deleteDuplicates(four);

    expect(result?.val).toBe(3);
    expect(result?.next?.val).toBe(2);
    expect(result?.next?.next?.val).toBe(1);
  });

  it('возвращает null если список пустой', () => {
    expect(deleteDuplicates(null)).toBeNull();
  });

  it('возвращает null если список имеет один элемент, который нужно удалить', () => {
    const one = new ListNode(1);

    expect(deleteDuplicates(one)).toEqual(one);
  });

  it('возвращает узел если список имеет один элемент, который сохраняется', () => {
    const one = new ListNode(1);

    expect(deleteDuplicates(one)).toEqual(one);
  });

  it('возвращает узел если список имеет два элемента, которые сохраняются', () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);

    expect(deleteDuplicates(two)).toEqual(two);
  });

  it('удаляет дубликаты из связанного списка с двумя дублирующимися элементами', () => {
    const one = new ListNode(3);
    const two = new ListNode(3, one);
    const three = new ListNode(2, two);
    const four = new ListNode(1, three);
    const five = new ListNode(1, four);

    const result = deleteDuplicates(five);

    expect(result?.val).toBe(1);
    expect(result?.next?.val).toBe(2);
    expect(result?.next?.next?.val).toBe(3);
  });
});
