import {row, column, id} from './boarding-pass';

describe('Test first', () => {
    test('row FBFBBFFRLR is 44', () => {
        expect(row('FBFBBFFRLR')).toBe(44);
    });

    test('column FBFBBFFRLR is 5', () => {
        expect(column('FBFBBFFRLR')).toBe(5);
    });

    test('id FBFBBFFRLR is 357', () => {
        expect(id('FBFBBFFRLR')).toBe(357);
    });

});
