import {customCustoms, differentAnswersInAGroup} from './custom-customs';

describe('single groups', () => {
  test('in a group of 1 person all the answers have been answered by all group', () => {
    expect(differentAnswersInAGroup('abc')).toBe(3);
  });

  xtest('count the answers of multiple person group', () => {
    expect(differentAnswersInAGroup('abc\nde\nf')).toBe(6);
  });

  xtest('repeated answers does not count twice', () => {
    expect(differentAnswersInAGroup('abc\nbc')).toBe(3);
  });
});

describe('acceptance test', () => {
  xtest('number of different answers', () => {
    const answers = 'abc\n' +
        '\n' +
        'a\n' +
        'b\n' +
        'c\n' +
        '\n' +
        'ab\n' +
        'ac\n' +
        '\n' +
        'a\n' +
        'a\n' +
        'a\n' +
        'a\n' +
        '\n' +
        'b';
    expect(customCustoms(answers)).toBe(11);
  });

});

describe('answers', () => {
  xtest('first part', () => {
    const fs = require('fs');
    const answers = fs.readFileSync('input.txt', 'utf8');

    expect(customCustoms(answers)).toBe(7027);
  });
});