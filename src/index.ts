import { Regions } from './regions';
import { calculateJMBGControlNumber, getDate, getRandomIntInclusive, stringToDigitsArray } from './utils';

export const INVALID_JMBG_ERROR = new Error('Invalid JMBG');

export enum InvalidReason {
  NOT_STRING = 'NOT_STRING',
  MUST_CONTAIN_EXACTLY_13_DIGITS = 'MUST_CONTAIN_EXACTLY_13_DIGITS',
  INVALID_DATE = 'INVALID_DATE',
  INVALID_CONTROL_NUMBER = 'INVALID_CONTROL_NUMBER',
}

export interface PersonData {
  year: number;
  month: number;
  day: number;
  region: string;
  place?: string;
  gender: 'Male' | 'Female';
}

export interface ValidationResult {
  valid: boolean;
  reason?: InvalidReason;
}

/**
 * Validates JMBG
 *
 * @param jmbg
 * @returns {ValidationResult} Object containing bool valid and reason if valid === false
 */
export function validateJMBG(jmbg: string): ValidationResult {
  // Check if input is a string.
  if (typeof jmbg !== 'string') {
    return { valid: false, reason: InvalidReason.NOT_STRING };
  }

  // Check if string matches the 13 digit format 12 + "checksum" (control number).
  const jmbgPattern = /^(\d{13})$/;
  if (!jmbg.match(jmbgPattern)) {
    return { valid: false, reason: InvalidReason.MUST_CONTAIN_EXACTLY_13_DIGITS };
  }

  // Parse all string digits to Array of number types.
  const jmbgDigits = jmbg.split('').map((item) => {
    return parseInt(item, 10);
  });

  // Check for date
  const { year, month, day } = getDate(jmbg);
  const date = new Date(year, month, day);
  const now = new Date();

  if (date.toString() === 'Invalid Date' || date > now) {
    return { valid: false, reason: InvalidReason.INVALID_DATE };
  }

  // Check control number

  // Extract control number.
  const inputControlNumber = jmbgDigits.pop()!; // Get and remove the last digit. It must be a number, hence bang operator

  // Do the actual math.
  const calculatedControlNumber = calculateJMBGControlNumber(jmbgDigits);

  if (inputControlNumber !== calculatedControlNumber) {
    return { valid: false, reason: InvalidReason.INVALID_CONTROL_NUMBER };
  }

  return { valid: true };
}

/**
 * Generate random number that has valid control number
 *
 * (Fake but possible JMBG)
 */
export function generateRandomJMBG() {
  const randomDate = new Date(getRandomIntInclusive(0, +new Date())); // Get random unix timestamp

  const DD = `${('0' + randomDate.getDate()).slice(-2)}`;
  const MM = `${('0' + (randomDate.getMonth() + 1)).slice(-2)}`;
  const YYY = `${('' + randomDate.getFullYear()).slice(-3)}`;

  // Can be improved to validate region number
  const RR = `${('0' + getRandomIntInclusive(0, 99)).slice(-2)}`;

  // Can be improved to make better random distribution, check https://github.com/gnekich/oiblib
  const BBB = `${('00' + getRandomIntInclusive(0, 999)).slice(-3)}`;

  const jmbgWithoutControlNumberInput = `${DD}${MM}${YYY}${RR}${BBB}`;
  const calculatedControlNumber = calculateJMBGControlNumber(stringToDigitsArray(jmbgWithoutControlNumberInput));

  // Return both the random and control number
  return `${jmbgWithoutControlNumberInput}${calculatedControlNumber}`;
}

/**
 * Decodes the JMBG into birth date, region, place and gender.
 * @param {string} jmbg JMBG of the individual
 * @throws Will throw an error if JMBG is invalid.
 * @returns {PersonData} Object containing parsed data.
 */
export function decodeJMBG(jmbg: string): PersonData {
  if (!validateJMBG(jmbg).valid) {
    throw INVALID_JMBG_ERROR;
  }

  const { year, month, day } = getDate(jmbg);

  const regionFirstDigit = parseInt(jmbg[7], 10);
  const region = Regions[regionFirstDigit];
  const pr = jmbg[7] + jmbg[8];

  const genderNmb = parseInt(jmbg[9] + jmbg[10] + jmbg[11], 10);
  const gender = genderNmb < 500 ? 'Male' : 'Female';

  return {
    year,
    month: month + 1,
    day,
    region: region.label,
    place: region.regions && region.regions[pr],
    gender,
  };
}
