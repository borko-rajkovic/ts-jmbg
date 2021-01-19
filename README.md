# TS-JMBG [![npm version](https://badge.fury.io/js/ts-jmbg.svg)](https://www.npmjs.com/package/ts-jmbg)

TS-JMBG - Library for validating, decoding and generating random JMBG written in Typescript.

It is heavily based on two existing packages:

<https://www.npmjs.com/package/jmbg>

<https://www.npmjs.com/package/oiblib>

JMBG is personal ID number given to all citizens of Yugoslavia from 1976. It's still in use in all countries that consisted Yugoslavia.

More about JMBG here:

<https://sr.wikipedia.org/sr-el/Јединствени_матични_број_грађанина>

[![NPM](https://nodei.co/npm/ts-jmbg.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/ts-jmbg)

## Installation

### npm

```bash
npm i ts-jmbg --save
```

### yarn

```bash
yarn add ts-jmbg
```

## Examples

### Validate

```javascript
import { validateJMBG } from './index';

// Valid JMBG
const validJMBG = validateJMBG('0101990360007');

console.log(validJMBG.valid); // true

// Invalid JMBG
const invalidJMBG = validateJMBG('0101001890123');

console.log(invalidJMBG.valid); // false
console.log(invalidJMBG.reason); // INVALID_CONTROL_NUMBER
```

### Generate Random JMBG

```javascript
import { generateRandomJMBG, validateJMBG } from './index';

// Generate new valid JMBG
const newJMBG = generateRandomJMBG();

console.log(`Generated JMBG: ${newJMBG}, is valid: ${validateJMBG(newJMBG).valid}`);
```

### Decode JMBG

```javascript
import { decodeJMBG } from './index';

const decodedJMBG = decodeJMBG('0101001250028');

// {
//   day: 1,
//   gender: 'Male',
//   month: 1,
//   place: 'Cetinje',
//   region: 'Crna Gora',
//   year: 2001,
// }
```

## Todo

- [ ] validateJMBG should check if region is correct. (RR)
- [ ] Random JMBG generator - better random distribution
- [ ] Pass params to random JBMG generator to respect predefined options like (DD, MM, YYY, RR, BBB, K)

## Thanks

- [Borko Rajković](https://github.com/borko-rajkovic)

## Contributing

- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3
