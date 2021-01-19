interface JMBGDate {
  year: number;
  month: number;
  day: number;
}

/**
 * Used to get random integer from min to max
 *
 * The maximum is inclusive and the minimum is inclusive.
 *
 * Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 *
 * @param min lower limit inclusive
 * @param max upper limit inclusive
 *
 * @returns {number}
 */
export function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Converts string to array of numbers
 *
 * @param input JMBG string containing only digits
 *
 * @returns {number[]}
 */
export function stringToDigitsArray(input: string): number[] {
  return input.split('').map((item) => {
    return parseInt(item, 10);
  });
}

/**
 * Extract year, month and day from JMBG
 * @param jmbg
 * @returns {JMBGDate} Object containing year, month and day
 */
export const getDate = (jmbg: string): JMBGDate => {
  const year = parseInt((jmbg[4] === '9' ? '1' : '2') + jmbg[4] + jmbg[5] + jmbg[6], 10);
  const month = parseInt(jmbg[2] + jmbg[3], 10) - 1;
  const day = parseInt(jmbg[0] + jmbg[1], 10);
  return {
    year,
    month,
    day,
  };
};

/**
 * Calculates last digit of JMBG (control number)
 *
 * Check: https://sh.wikipedia.org/wiki/Jedinstveni_matični_broj_građana
 * @param jmbgWithoutControlNumber Part of JMBG without last digit
 * @returns {number} Control number for provided input
 */
export const calculateJMBGControlNumber = (jmbgWithoutControlNumber: number[]): number => {
  const elevenMinusPreCalculatedControlNumber =
    11 -
    ((7 * (jmbgWithoutControlNumber[0] + jmbgWithoutControlNumber[6]) +
      6 * (jmbgWithoutControlNumber[1] + jmbgWithoutControlNumber[7]) +
      5 * (jmbgWithoutControlNumber[2] + jmbgWithoutControlNumber[8]) +
      4 * (jmbgWithoutControlNumber[3] + jmbgWithoutControlNumber[9]) +
      3 * (jmbgWithoutControlNumber[4] + jmbgWithoutControlNumber[10]) +
      2 * (jmbgWithoutControlNumber[5] + jmbgWithoutControlNumber[11])) %
      11);
  const calculatedControlNumber = elevenMinusPreCalculatedControlNumber > 9 ? 0 : elevenMinusPreCalculatedControlNumber;

  // Return the final value.
  return calculatedControlNumber;
};
