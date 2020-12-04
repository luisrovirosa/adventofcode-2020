function countValidPassports(passportsAsString) {
  let passports = passportsAsString.split('\n\n');
  return passports.filter(isValidPassport).length;
}

function isValidPassport(passport) {
  return includesEyeColor(passport) &&
      includesPassportId(passport) &&
      includesExpirationYear(passport) &&
      includesHairColor(passport) &&
      includesBirthYear(passport) &&
      includesIssueYear(passport) &&
      includesHeight(passport);
}

function includesEyeColor(passport) {
  return passport.includes('ecl');
}

function includesPassportId(passport) {
  return passport.includes('pid');
}

function includesExpirationYear(passport) {
  return passport.includes('eyr');
}

function includesHairColor(passport) {
  return passport.includes('hcl');
}

function includesBirthYear(passport) {
  let match = passport.match(/byr:(\d+)/);

  return match && match[1] >= 1920 && match[1] <= 2002;
}

function includesIssueYear(passport) {
  let match = passport.match(/iyr:(\d+)/);

  return match && match[1] < 2020;
}

function includesHeight(passport) {
  return passport.includes('hgt');
}

export {countValidPassports};
