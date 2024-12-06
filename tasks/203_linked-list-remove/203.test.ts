import { describe, it, expect } from "vitest";
import { ListNode, removeElements } from "./203";

describe("203 - linked-list-remove", () => {
  it("removes elements from linked list", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);
    const four = new ListNode(3, three);

    const result = removeElements(four, 3);

    expect(result?.val).toBe(2);
    expect(result?.next?.val).toBe(1);
  });

  it("returns null if list is empty", () => {
    expect(removeElements(null, 1)).toBeNull();
  });

  it("returns null if list has one element to remove", () => {
    const one = new ListNode(1);

    expect(removeElements(one, 1)).toBeNull();
  });

  it("returns node if list has one element to keep", () => {
    const one = new ListNode(1);

    expect(removeElements(one, 2)).toEqual(one);
  });

  it("returns node if list has two elements to keep", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);

    expect(removeElements(two, 3)).toEqual(two);
  });
});
