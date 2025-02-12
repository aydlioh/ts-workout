function compress(chars: string[]): number {
  let write = 0;
  let i = 0;

  while (i < chars.length) {
    let start = i;

    while (i < chars.length && chars[i] === chars[start]) {
      i++;
    }

    chars[write] = chars[start];
    write++;

    const count = i - start;
    if (count > 1) {
      for (const digit of count.toString()) {
        chars[write] = digit;
        write++;
      }
    }
  }

  return write;
}
