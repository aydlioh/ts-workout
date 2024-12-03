export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  let current = head;
  let prev: ListNode | null = null;
  let next: ListNode | null = null;

  while (current) {
    next = current.next;
    // Вся логика здесь
    current.next = prev;
    prev = current;

    current = next;
  }

  return prev;
}
