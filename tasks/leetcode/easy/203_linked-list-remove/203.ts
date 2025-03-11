export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  if (head == null) return null;

  const dummy = new ListNode(0, head);
  let current = dummy;

  while (current.next) {
    // Проверяем является ли следующий нужным числом и перепрыгиваем, указав уже новую ссылку. Тем самым мы удаляем ненужный элемент и на его место перезапсиываем в память следующий элемент.
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      // Переходим на следующий
      current = current.next;
    }
  }

  return dummy.next;
}
