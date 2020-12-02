import {countValidPasswords} from './passwordValidator';

describe('password is valid when', () => {
    test('contains only the required letter', () => {
        expect(countValidPasswords('1-2 m: m')).toBe(1);
    });
});

describe('password is not valid when', () => {
    test('does not contain the required letter', () => {
        expect(countValidPasswords('1-2 m: a')).toBe(0);
    });
});
