export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function middleNodeFirst(head: ListNode | null): ListNode | null {
  let walker: ListNode | null = head;
  let runner: ListNode | null = head;

  while (runner !== null && walker !== null && runner?.next !== null) {
    walker = walker.next;
    if (runner.next.next === null) break;
    runner = runner.next.next;
  }

  return walker;
}

export function middleNode(head: ListNode | null): ListNode | null {
  let current: ListNode | null = head;
  let count = 0;

  while (current) {
    count++;
    current = current.next;
  }

  current = head;
  let middle = Math.floor(count / 2);
  while (middle > 0 && current) {
    middle--;
    current = current.next;
  }

  return current;
}
