function isValidPassport(passport) {
  return passport.includes('ecl') &&
      passport.includes('pid') &&
      passport.includes('eyr') &&
      passport.includes('hcl') &&
      passport.includes('byr') &&
      passport.includes('iyr') &&
      passport.includes('hgt');
}

function countValidPassports(passportsAsString) {
  let passports = passportsAsString.split('\n\n');
  return passports.filter(isValidPassport).length;
}

export {countValidPassports};
