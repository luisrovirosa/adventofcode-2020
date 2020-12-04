function countValidPassports(passports) {
  let isValid = passports.includes('ecl');
  return isValid ? 1 : 0;
}

export {countValidPassports};
