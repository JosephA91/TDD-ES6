import { getLetterCount } from './letter-count';
import { isEqual } from 'lodash'

export const isAnagram = (stringOne, StringTwo) => {
  // Sort strings
  const stringOneSorted = stringOne.replace(/[^a-zA-Z]/g, '').split('').sort().join('').toLowerCase();
  const stringTwoSorted = StringTwo.replace(/[^a-zA-Z]/g, '').split('').sort().join('').toLowerCase();

  // Get the letter count of sorted strings
  const stringOneCount = getLetterCount(stringOneSorted);
  const StringTwoCount = getLetterCount(stringTwoSorted);

  // Compare results
  return isEqual(stringOneCount, StringTwoCount);
}