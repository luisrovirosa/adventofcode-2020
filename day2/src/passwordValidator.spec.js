import {countValidPasswords} from './passwordValidator';

describe('valid passwords', () => {
    test('password only with required letters is valid', () => {
        expect(countValidPasswords('1-2 m: m')).toBe(1);
    });
});
