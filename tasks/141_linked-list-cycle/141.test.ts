import { describe, it, expect } from "vitest";
import { ListNode, hasCycle } from "./141";

describe("141 - linked-list-cycle", () => {
  it("returns true if list has cycle", () => {
    const cycle = new ListNode(1);
    const three = new ListNode(3, cycle);
    const two = new ListNode(2, three);
    const one = new ListNode(1, two);
    cycle.next = one;

    expect(hasCycle(one)).toBeTruthy();
  });

  it("returns false if list has no cycle", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);

    expect(hasCycle(three)).toBeFalsy();
  });
});
