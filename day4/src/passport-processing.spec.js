import {countValidPassports} from './passport-processing';

describe('valid passports', () => {
    test('sample valid passport', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(1);
    });

    test('birth year should be at least 1920', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1920 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(1);
    });

    test('birth year should be up to 2002', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:2002 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(1);
    });

    test('should have Issue year at least 2010', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1920 iyr:2010 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(1);
    });

    test('should have Issue year up to 2020', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:2002 iyr:2020 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(1);
    });

    test('should have Height greater at least 60in', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2017 cid:147 hgt:60in';
        expect(countValidPassports(passport)).toBe(1);
    });

    test('missing Country id (cid)', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2017 hgt:183cm';
        expect(countValidPassports(passport)).toBe(1);
    });


});
describe('Is invalid passport when', () => {
    test('missing Eye Color (ecl)', () => {
        let passport = 'pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('missing Passport ID (pid)', () => {
        let passport = 'ecl:gry eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('missing Expiration Year (eyr)', () => {
        let passport = 'ecl:gry pid:860033327 hcl:#fffffd\n' +
            'byr:1937 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('missing Hair Color (hcl)', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020\n' +
            'byr:1937 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('missing Birth Year (byr)', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('missing Issue Year (iyr)', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('missing Height (hgt)', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2017 cid:147';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('Birth Year is greater than 2002', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:2003 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('Birth Year is smaller than 1920', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1919 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('Issuer Year is greater than 2020', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2021 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('Issuer Year is smaller than 2010', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2009 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('Height is smaller than 150cm', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2017 cid:147 hgt:149cm';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('Height is greater than 193', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2017 cid:147 hgt:194cm';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('Height is smaller than 59in', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2017 cid:147 hgt:58in';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('Height is greater than 76in', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2017 cid:147 hgt:77in';
        expect(countValidPassports(passport)).toBe(0);
    });

    test('Hair Color has no #', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:ffffffd\n' +
            'byr:1937 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(0);
    });
});


describe('multiple passports', () => {
   test('sample acceptance test', () => {
       let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
           'byr:1937 iyr:2017 cid:147 hgt:183cm\n' +
           '\n' +
           'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\n' +
           'hcl:#cfa07d byr:1929\n' +
           '\n' +
           'hcl:#ae17e1 iyr:2013\n' +
           'eyr:2024\n' +
           'ecl:brn pid:760753108 byr:1931\n' +
           'hgt:179cm\n' +
           '\n' +
           'hcl:#cfa07d eyr:2025 pid:166559648\n' +
           'iyr:2011 ecl:brn hgt:59in';

       expect(countValidPassports(passport)).toBe(2);
   })
});

describe('solutions', () => {
    xtest('first part', () => {
        const fs = require('fs');
        const passports = fs.readFileSync('input.txt', 'utf8');

        expect(countValidPassports(passports)).toBe(190);
    });
});