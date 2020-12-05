import {row, column, id, highest, mySeat} from './boarding-pass';
import {
  row as binaryRow,
  column as binaryColumn,
  id as binaryId,
  highest as binaryHighest,
  mySeat as binaryMySeat,
} from './binary-boarding-pass';

describe('Test first', () => {
  [row, binaryRow].forEach((row) => {
    test('row FBFBBFFRLR is 44', () => {
      expect(row('FBFBBFFRLR')).toBe(44);
    });
  });

  [column, binaryColumn].forEach((column) => {
    test('column FBFBBFFRLR is 5', () => {
      expect(column('FBFBBFFRLR')).toBe(5);
    });
  });

  [id, binaryId].forEach((id) => {
    test('id FBFBBFFRLR is 357', () => {
      expect(id('FBFBBFFRLR')).toBe(357);
    });
  });

});

describe('solutions', () => {
  [highest, binaryHighest].forEach((highest) => {
    test('first part', () => {
      const fs = require('fs');
      const boardingPasses = fs.readFileSync('input.txt', 'utf8');

      expect(highest(boardingPasses)).toBe(935);
    });
  });
  [mySeat, binaryMySeat].forEach((mySeat) => {

    test('second part', () => {
      const fs = require('fs');
      const boardingPasses = fs.readFileSync('input.txt', 'utf8');

      expect(mySeat(boardingPasses)).toBe(743);
    });
  });
});
