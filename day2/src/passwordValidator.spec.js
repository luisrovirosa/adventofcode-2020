import {countValidPasswords} from './passwordValidator';

test('password only with required letters is valid', () => {
    expect(countValidPasswords('1-2 m: m')).toBe(1);
});
