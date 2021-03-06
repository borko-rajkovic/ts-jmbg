import {
  decodeJMBG,
  generateRandomJMBG,
  INVALID_JMBG_ERROR,
  InvalidReason,
  isValidJMBG,
  PersonData,
  validateJMBG,
} from '..';

describe('Validate JMBG', () => {
  it('isValidJMBG', () => {
    expect(isValidJMBG('0101001250028')).toBe(true);
    expect(isValidJMBG('123456789012')).toBe(false);
  });

  it('Fail if number instead of string', () => {
    const validationResult = validateJMBG((123 as unknown) as string);
    expect(validationResult.valid).toBe(false);
    expect(validationResult.reason).toBe(InvalidReason.NOT_STRING);
  });

  it('Fail if JMBG has less then 13 digits', () => {
    const validationResult = validateJMBG('123456789012');
    expect(validationResult.valid).toBe(false);
    expect(validationResult.reason).toBe(InvalidReason.MUST_CONTAIN_EXACTLY_13_DIGITS);
  });

  it('Fail if JMBG has more then 13 digits', () => {
    const validationResult = validateJMBG('12345678901234');
    expect(validationResult.valid).toBe(false);
    expect(validationResult.reason).toBe(InvalidReason.MUST_CONTAIN_EXACTLY_13_DIGITS);
  });

  it('Fail if JMBG contains letters', () => {
    const validationResult = validateJMBG('12345678901a3');
    expect(validationResult.valid).toBe(false);
    expect(validationResult.reason).toBe(InvalidReason.MUST_CONTAIN_EXACTLY_13_DIGITS);
  });

  it('Fail if date is invalid', () => {
    // Date is invalid: 12. 34. '678
    const validationResult = validateJMBG('1234567890123');
    expect(validationResult.valid).toBe(false);
    expect(validationResult.reason).toBe(InvalidReason.INVALID_DATE);
  });

  it('Fail if control number is invalid', () => {
    const validationResult = validateJMBG('0101001890123');
    expect(validationResult.valid).toBe(false);
    expect(validationResult.reason).toBe(InvalidReason.INVALID_CONTROL_NUMBER);
  });

  it('Valid JMBG', () => {
    const validationResult = validateJMBG('0101001250028');
    expect(validationResult.valid).toBe(true);
    expect(validationResult.reason).toBeUndefined();
  });
});

describe('Generate random JMBG', () => {
  it('Should be valid', () => {
    const newJMBG = generateRandomJMBG();

    const validationResult = validateJMBG(newJMBG);

    expect(validationResult.valid).toBe(true);
    expect(validationResult.reason).toBeUndefined();
  });
});

describe('Decode JMBG', () => {
  it('Valid JMBG Male', () => {
    const newJMBG = '0101001250028';

    const expectedPersonData: PersonData = {
      day: 1,
      gender: 'Male',
      month: 1,
      place: 'Cetinje',
      region: 'Crna Gora',
      year: 2001,
    };

    const decodedPersonData = decodeJMBG(newJMBG);

    expect(decodedPersonData).toEqual(expectedPersonData);
  });

  it('Valid JMBG Female', () => {
    const newJMBG = '0101001255020';

    const expectedPersonData: PersonData = {
      day: 1,
      gender: 'Female',
      month: 1,
      place: 'Cetinje',
      region: 'Crna Gora',
      year: 2001,
    };

    const decodedPersonData = decodeJMBG(newJMBG);

    expect(decodedPersonData).toEqual(expectedPersonData);
  });

  it('Valid JMBG before 2000', () => {
    const newJMBG = '0101988255026';

    const expectedPersonData: PersonData = {
      day: 1,
      gender: 'Female',
      month: 1,
      place: 'Cetinje',
      region: 'Crna Gora',
      year: 1988,
    };

    const decodedPersonData = decodeJMBG(newJMBG);

    expect(decodedPersonData).toEqual(expectedPersonData);
  });

  it('Invalid JMBG (short string)', () => {
    const newJMBG = '010100125002';

    expect(() => {
      decodeJMBG(newJMBG);
    }).toThrow(INVALID_JMBG_ERROR);
  });
});
