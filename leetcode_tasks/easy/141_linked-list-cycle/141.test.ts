import { describe, it, expect } from "vitest";
import { ListNode, hasCycle } from "./141";

describe("hasCycle определяет наличие цикла в связанном списке", () => {
  it("возвращает true, если список имеет цикл", () => {
    const cycle = new ListNode(1);
    const three = new ListNode(3, cycle);
    const two = new ListNode(2, three);
    const one = new ListNode(1, two);
    cycle.next = one;

    expect(hasCycle(one)).toBeTruthy();
  });

  it("возвращает false, если список не имеет цикла", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);

    expect(hasCycle(three)).toBeFalsy();
  });
});

