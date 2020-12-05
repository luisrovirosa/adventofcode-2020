import {row, column} from './boarding-pass';

describe('Test first', () => {
    test('row FBFBBFFRLR is 44', () => {
        expect(row('FBFBBFFRLR')).toBe(44);
    });
    test('column FBFBBFFRLR is 5', () => {
        expect(column('FBFBBFFRLR')).toBe(5);
    });

});
