export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
}

export function mergeTwoListsReqursive(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    return new ListNode(list1.val, mergeTwoListsReqursive(list1.next, list2));
  } else {
    return new ListNode(list2.val, mergeTwoListsReqursive(list1, list2.next));
  }
}
