import { describe, it, expect } from 'vitest';
import { middleNode, ListNode } from './876';

describe('middleNode - находит средний узел связанного списка', () => {
  it('возвращает средний узел, если список имеет нечетное количество элементов', () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);

    expect(middleNode(three)).toBe(two);
  });

  it('возвращает средний узел, если список имеет четное количество элементов', () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);
    const four = new ListNode(4, three);

    expect(middleNode(four)).toBe(two);
  });

  it('возвращает null, если список пуст', () => {
    expect(middleNode(null)).toBeNull();
  });

  it('возвращает узел, если список имеет один элемент', () => {
    expect(middleNode(new ListNode(1))).toEqual(new ListNode(1));
  });

  it('обрабатывает связанный список с нечетным количеством элементов', () => {
    const nodes = Array.from({ length: 7 }, (_, i) => new ListNode(i + 1));
    for (let i = 5; i >= 0; i--) nodes[i].next = nodes[i + 1];

    expect(middleNode(nodes[0])).toBe(nodes[3]);
  });

  it('обрабатывает связанный список с четным количеством элементов', () => {
    const nodes = Array.from({ length: 8 }, (_, i) => new ListNode(i + 1));
    for (let i = 6; i >= 0; i--) nodes[i].next = nodes[i + 1];

    expect(middleNode(nodes[0])).toBe(nodes[4]);
  });

  it('обрабатывает связанный список с двумя элементами', () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);

    expect(middleNode(two)).toBe(one);
  });
});
