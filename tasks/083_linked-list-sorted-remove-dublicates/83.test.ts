import { describe, it, expect } from "vitest";
import { ListNode, deleteDuplicates } from "./83";

describe("83 - linked-list-sorted-remove-dublicates", () => {
  it("removes duplicates from linked list", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);
    const four = new ListNode(3, three);

    const result = deleteDuplicates(four);

    expect(result?.val).toBe(3);
    expect(result?.next?.val).toBe(2);
    expect(result?.next?.next?.val).toBe(1);
  });

  it("returns null if list is empty", () => {
    expect(deleteDuplicates(null)).toBeNull();
  });

  it("returns null if list has one element to remove", () => {
    const one = new ListNode(1);

    expect(deleteDuplicates(one)).toEqual(one);
  });

  it("returns node if list has one element to keep", () => {
    const one = new ListNode(1);

    expect(deleteDuplicates(one)).toEqual(one);
  });

  it("returns node if list has two elements to keep", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);

    expect(deleteDuplicates(two)).toEqual(two);
  });

  it("removes duplicates from linked list with two duplicate elements", () => {
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

