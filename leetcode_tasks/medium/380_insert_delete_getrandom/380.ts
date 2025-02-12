export class RandomizedSet {
  private map: Map<number, number>;
  private array: number[];

  constructor() {
    this.map = new Map();
    this.array = [];
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }
    this.map.set(val, this.array.length);
    this.array.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) {
      return false;
    }

    const index = this.map.get(val)!;
    const last = this.array[this.array.length - 1];
    this.array[index] = last;
    this.map.set(last, index);
    this.array.pop();
    this.map.delete(val);

    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.array.length);
    return this.array[randomIndex];
  }
}
