export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false;
  let walker: ListNode | null = head;
  let runner: ListNode | null = head;

  while (
    walker !== null &&
    runner?.next !== null &&
    runner.next.next !== null
  ) {
    walker = walker.next;
    runner = runner.next.next;

    if (walker === runner) {
      return true;
    }
  }

  return false;
}
