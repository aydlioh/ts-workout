import { describe, it, expect } from 'vitest';
import { compress } from './443';

describe('443 - string_compression', () => {
  it('UC1', () => {
    expect(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])).toBe(6);
  });
  it('UC2', () => {
    expect(compress(['a'])).toBe(1);
  });
  it('UC3', () => {
    expect(
      compress([
        'a',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
      ])
    ).toBe(4);
  });
});
