function isValid(s: string): boolean {
  const stack: string[] = [];
  const mapping: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (!stack.length) return false;
      const lastElement = stack.pop();
      if (lastElement !== mapping[char]) return false;
    }
  }

  return stack.length === 0;
}
