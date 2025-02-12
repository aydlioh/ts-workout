class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current !== null) {
    const nextNode = current.next; // Сохраняем ссылку на следующий узел
    current.next = prev; // Разворачиваем указатель
    prev = current; // Сдвигаем prev на текущий узел
    current = nextNode; // Переходим к следующему узлу
  }

  return prev;
}
