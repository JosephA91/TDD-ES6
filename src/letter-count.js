export const getLetterCount = (string) => {
  const letters = string.split('');
  let letterCount = {};

  for (let i = 0; i < letters.length; i++) {
    if(letters[i] in letterCount) {
      letterCount[letters[i]] += 1;
    } else {
      letterCount[letters[i]] = 1;
    }
  }

  return letterCount
}