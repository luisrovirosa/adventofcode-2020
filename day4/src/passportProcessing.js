function countValidPassports(passports) {
  let isValid = passports.includes('ecl') && passports.includes('pid') && passports.includes('eyr') &&
      passports.includes('hcl') && passports.includes('byr') ;
  return isValid ? 1 : 0;
}

export {countValidPassports};
