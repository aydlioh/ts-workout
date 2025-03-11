import { describe, it, expect } from 'vitest';
import { groupAnagrams } from './049';

describe('049 - group_anagrams', () => {
  it('UC1', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const output = groupAnagrams(input);
    expect(output).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
  });
});
