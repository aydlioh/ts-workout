export function compress(chars: string[]): number {
  if (chars.length === 0) return 0;

  let write = 0;
  let count = 1;

  for (let read = 1; read <= chars.length; read++) {
    if (read < chars.length && chars[read] === chars[read - 1]) {
      count++;
    } else {
      chars[write] = chars[read - 1];
      write++;

      if (count > 1) {
        const countStr = count.toString();
        for (let i = 0; i < countStr.length; i++) {
          chars[write] = countStr[i];
          write++;
        }
      }

      count = 1;
    }
  }

  return write;
}
