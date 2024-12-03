import { describe, it, expect } from "vitest";
import { isPalindrome, ListNode } from "./234";

describe("234 - linked-list-palindrome", () => {
  it("returns true if linked list is palindrome", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);
    const four = new ListNode(2, three);
    const five = new ListNode(1, four);

    expect(isPalindrome(five)).toBeTruthy();
  });

  it("returns false if linked list is not palindrome", () => {
    const one = new ListNode(1);
    const two = new ListNode(2, one);
    const three = new ListNode(3, two);
    const four = new ListNode(4, three);

    expect(isPalindrome(four)).toBeFalsy();
  });

  it("returns true if linked list has one element", () => {
    const one = new ListNode(1);

    expect(isPalindrome(one)).toBeTruthy();
  });

  it("returns true if linked list is empty", () => {
    expect(isPalindrome(null)).toBeTruthy();
  });
});
