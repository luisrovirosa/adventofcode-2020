function countValidPassports(passports) {
  let isValid = passports.includes('ecl') && passports.includes('pid');
  return isValid ? 1 : 0;
}

export {countValidPassports};
