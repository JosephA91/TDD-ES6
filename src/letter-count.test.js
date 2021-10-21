import { getLetterCount } from './letter-count';
import { expect } from 'chai';

describe('getLetterCount - Basic Functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected);
  })

  it('returns the correct letter count for a string with one of each letter', () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount('cat');
    expect(actual).to.deep.equal(expected);
  })

  it('returns the correct letter count for a string with multiple of each letter', () => {
    const expected = { b: 1, e: 2, t: 2, r: 1 };
    const actual = getLetterCount('better');
    expect(actual).to.deep.equal(expected);
  })

  it('returns the correct letter count for a long string with multiple of each letter', () => {
    const expected = { m: 1, i: 4, s: 4, p: 2 };
    const actual = getLetterCount('mississippi');
    expect(actual).to.deep.equal(expected);
  })
})