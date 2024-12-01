import { describe, it, expect } from "vitest";
import { middleNode, ListNode } from "./876";

describe("876 - middle-linked-list", () => {
  it("returns middle node when list has odd length", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);

    expect(middleNode(three)).toBe(two);
  });

  it("returns middle node when list has even length", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);
    const four = new ListNode(4, three);

    expect(middleNode(four)).toBe(two);
  });

  it("returns null when list is empty", () => {
    expect(middleNode(null)).toBeNull();
  });

  it("returns node when list has one element", () => {
    expect(middleNode(new ListNode(1))).toEqual(new ListNode(1));
  });

  it("handles a longer list with odd length", () => {
    const nodes = Array.from({ length: 7 }, (_, i) => new ListNode(i + 1));
    for (let i = 5; i >= 0; i--) nodes[i].next = nodes[i + 1];

    expect(middleNode(nodes[0])).toBe(nodes[3]);
  });

  it("handles a longer list with even length", () => {
    const nodes = Array.from({ length: 8 }, (_, i) => new ListNode(i + 1));
    for (let i = 6; i >= 0; i--) nodes[i].next = nodes[i + 1];

    expect(middleNode(nodes[0])).toBe(nodes[4]);
  });

  it("handles a list with two elements", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);

    expect(middleNode(two)).toBe(one);
  });
});

