import { describe, it, expect } from "vitest";
import { ListNode, removeElements } from "./203";

describe("removeElements удаляет элементы из связанного списка", () => {
  it("удаляет элементы из связанного списка", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);
    const four = new ListNode(3, three);

    const result = removeElements(four, 3);

    expect(result?.val).toBe(2);
    expect(result?.next?.val).toBe(1);
  });

  it("возвращает null, если список пустой", () => {
    expect(removeElements(null, 1)).toBeNull();
  });

  it("возвращает null, если список имеет один элемент для удаления", () => {
    const one = new ListNode(1);

    expect(removeElements(one, 1)).toBeNull();
  });

  it("возвращает узел, если список имеет один элемент для сохранения", () => {
    const one = new ListNode(1);

    expect(removeElements(one, 2)).toEqual(one);
  });

  it("возвращает узел, если список имеет два элемента для сохранения", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);

    expect(removeElements(two, 3)).toEqual(two);
  });
});

