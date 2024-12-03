export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 1
export function isPalindrome(head: ListNode | null): boolean {
  if (head === null) return true;

  let walker: ListNode | null = head;
  let runner: ListNode | null = head;

  let reverse: ListNode | null = null;
  let next: ListNode | null = null;

  while (runner && runner.next) {
    // С помощью ранера пробегаем только до середины списка
    runner = runner.next.next;
    next = walker!.next;

    // Вся логика здесь
    walker!.next = reverse;
    reverse = walker;

    walker = next;
  }

  // Ранер будет null, только если длина списка четная, избавляемся от центра
  if (runner) {
    walker = walker!.next;
  }

  while (reverse && walker) {
    if (reverse.val !== walker.val) return false;
    reverse = reverse.next;
    walker = walker.next;
  }

  return true;
}

// 2
export function isPalindromeString(head: ListNode | null): boolean {
  let current = head;
  let origin = '';

  while (current) {
    origin += current.val;
    current = current.next;
  }

  return origin === origin.split('').reverse().join('');
}

// 3
export function isPalindromeArray(head: ListNode | null): boolean {
  let current = head;
  let origin: number[] = [];

  while (current) {
    origin.push(current.val);
    current = current.next;
  }

  return JSON.stringify(origin) === JSON.stringify(origin.reverse());
}
