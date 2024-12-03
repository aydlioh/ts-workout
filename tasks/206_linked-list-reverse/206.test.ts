import { describe, it, expect } from "vitest";

import { ListNode, reverseList } from "./206";

describe("206 - linked-list-reverse", () => {
  it("reverses linked list", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);

    const reversed = reverseList(three);

    expect(reversed?.val).toBe(1);
    expect(reversed?.next?.val).toBe(2);
    expect(reversed?.next?.next?.val).toBe(3);
  });

  it("reverses linked list with one element", () => {
    const one = new ListNode(1);

    const reversed = reverseList(one);

    expect(reversed?.val).toBe(1);
    expect(reversed?.next).toBeNull();
  });

  it("reverses an empty linked list", () => {
    const reversed = reverseList(null);

    expect(reversed).toBeNull();
  });

  it("reverses linked list with even number of elements", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);
    const four = new ListNode(4, three);

    const reversed = reverseList(four);

    expect(reversed?.val).toBe(1);
    expect(reversed?.next?.val).toBe(2);
    expect(reversed?.next?.next?.val).toBe(3);
    expect(reversed?.next?.next?.next?.val).toBe(4);
  });

  it("reverses linked list with 5 elements", () => {
    const five = new ListNode(5);
    const four = new ListNode(4, five);
    const three = new ListNode(3, four);
    const two = new ListNode(2, three);
    const one = new ListNode(1, two);

    const reversed = reverseList(one);

    expect(reversed?.val).toBe(5);
    expect(reversed?.next?.val).toBe(4);
    expect(reversed?.next?.next?.val).toBe(3);
    expect(reversed?.next?.next?.next?.val).toBe(2);
    expect(reversed?.next?.next?.next?.next?.val).toBe(1);
  });
});

