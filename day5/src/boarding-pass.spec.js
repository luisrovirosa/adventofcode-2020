import {row} from './boarding-pass';

describe('Test first', () => {
    test('row FBFBBFFRLR is 44', () => {
        expect(row('FBFBBFFRLR')).toBe(44);
    });

});
