// class LRUCache {
//   private capacity: number;
//   private cache: Map<number, { key: number; value: number }>;
//   private order: Map<number, number>;

//   constructor(capacity: number) {
//     this.capacity = capacity;
//     this.cache = new Map();
//     this.order = new Map();
//   }

//   get(key: number): number {
//     if (!this.cache.has(key)) return -1;

//     const value = this.cache.get(key)!.value;
//     this.order.delete(key);
//     this.order.set(key, Date.now());
//     return value;
//   }

//   put(key: number, value: number): void {
//     if (this.cache.has(key)) {
//       this.order.delete(key);
//       this.cache.set(key, { key, value });
//       this.order.set(key, Date.now());
//       return;
//     }

//     if (this.cache.size >= this.capacity) {
//       const lruKey = this.order.keys().next().value;
//       this.cache.delete(lruKey);
//       this.order.delete(lruKey);
//     }

//     this.cache.set(key, { key, value });
//     this.order.set(key, Date.now());
//   }
// }

class DoublyLinkedListNode {
  key: number;
  value: number;
  prev: DoublyLinkedListNode | null;
  next: DoublyLinkedListNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  private capacity: number;
  private cache: Map<number, DoublyLinkedListNode>;
  private head: DoublyLinkedListNode;
  private tail: DoublyLinkedListNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();

    this.head = new DoublyLinkedListNode(0, 0);
    this.tail = new DoublyLinkedListNode(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private remove(node: DoublyLinkedListNode): void {
    if (node.prev && node.next) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  }

  private insert(node: DoublyLinkedListNode): void {
    node.next = this.head.next;
    node.prev = this.head;
    if (this.head.next) {
      this.head.next.prev = node;
    }
    this.head.next = node;
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key)!;
    this.remove(node);
    this.insert(node);

    return node.value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key)!);
    }

    const newNode = new DoublyLinkedListNode(key, value);
    this.insert(newNode);
    this.cache.set(key, newNode);

    if (this.cache.size > this.capacity) {
      const lru = this.tail.prev!;
      this.remove(lru);
      this.cache.delete(lru.key);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
