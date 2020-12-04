import {countValidPassports} from './passportProcessing';

describe('valid passports', () => {
    test('sample valid passport', () => {
        let passport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
            'byr:1937 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(1);
    });
});
describe('invalid passports', () => {
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
});
