import { describe, it, expect } from "vitest";
import { mergeTwoLists, ListNode } from "./21";

describe("21 - linked-list-sorted-merge", () => {
  it("merges two sorted linked lists", () => {
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

  it("returns null if list1 is null", () => {
    const four = new ListNode(4);
    const five = new ListNode(5, four);

    const result = mergeTwoLists(null, five);

    expect(result).toEqual(five);
  });

  it("returns null if list2 is null", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);

    const result = mergeTwoLists(three, null);

    expect(result).toEqual(three);
  });

  it("returns null if both lists are null", () => {
    const result = mergeTwoLists(null, null);

    expect(result).toBeNull();
  });
});
