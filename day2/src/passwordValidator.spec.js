import {countValidPasswords} from './passwordValidator';

describe('password is valid when', () => {
    test('contains the minimum number of times the required letter', () => {
        expect(countValidPasswords('1-2 m: m')).toBe(1);
        expect(countValidPasswords('10-12 m: mmmmmmmmmm')).toBe(1);
    });

    test('contains the maximum number of times the required letter', () => {
        expect(countValidPasswords('1-2 m: mm')).toBe(1);
        expect(countValidPasswords('1-3 m: mmm')).toBe(1);
    });
});

describe('password is not valid when', () => {
    test('does not contain the required letter', () => {
        expect(countValidPasswords('1-2 m: a')).toBe(0);
    });

    test('has the letter less than the required number of times', () => {
        expect(countValidPasswords('2-3 m: m')).toBe(0);
    });

    test('excedes the maximum number of times the required letter', () => {
        expect(countValidPasswords('1-2 m: mmm')).toBe(0);
    });
});
