import { isAnagram } from './anagrams';
import { expect } from 'chai';

describe('isAnagram', () => {
  it('returns false when two words are NOT anagrams', () => {
    const expected = false;
    const actual = isAnagram('elbows', 'below');
    expect(actual).to.equal(expected);
  });

  it('returns true when two words are anagrams', () => {
    const expected = true;
    const actual = isAnagram('elbow', 'below');
    expect(actual).to.equal(expected);
  });

  it('returns true when two words are anagrams and one has spaces', () => {
    const expected = true;
    const actual = isAnagram('conversation', 'voices rant on');
    expect(actual).to.equal(expected);
  });

  it('returns false when two words have same letters but different quantities', () => {
    const expected = false;
    const actual = isAnagram('listens', 'silent');
    expect(actual).to.equal(expected);
  });

  it('returns true when two words are anagrams and one is UPPER CASE', () => {
    const expected = true;
    const actual = isAnagram('state', 'TASTE');
    expect(actual).to.equal(expected);
  });

  it('removes numeric characters', () => {
    const expected = true;
    const actual = isAnagram('state', 'tas2te1');
    expect(actual).to.equal(expected);
  });

  it('removes non-alphanumeric characters', () => {
    const expected = true;
    const actual = isAnagram('sta!!te', 't,a!s2te1');
    expect(actual).to.equal(expected);
  });
});