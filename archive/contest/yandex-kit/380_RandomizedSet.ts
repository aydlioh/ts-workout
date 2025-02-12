class RandomizedSet {
  private map: Map<number, number>;
  private list: number[];

  constructor() {
    this.map = new Map();
    this.list = [];
  }

  insert(value: number): boolean {
    if (this.map.has(value)) return false;

    this.map.set(value, this.list.length);
    this.list.push(value);
    return true;
  }

  remove(value: number): boolean {
    if (!this.map.has(value)) return false;

    const index: number = this.map.get(value)!;
    const lastElement = this.list[this.list.length - 1];

    this.list[index] = lastElement;
    this.map.set(lastElement, index);

    this.list.pop();
    this.map.delete(value);

    return true;
  }

  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}
