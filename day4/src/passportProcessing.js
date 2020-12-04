function isValidPassport(passport) {
  return passport.includes('ecl') &&
      passport.includes('pid') &&
      passport.includes('eyr') &&
      passport.includes('hcl') &&
      passport.includes('byr') &&
      passport.includes('iyr') &&
      passport.includes('hgt');
}

function countValidPassports(passports) {
  let isValid = isValidPassport(passports);
  return isValid ? 1 : 0;
}

export {countValidPassports};
