import {customCustoms, differentAnswersInAGroup} from './custom-customs';

describe('single groups', () => {
  test('in a group of 1 person all the answers have been answered by all group', () => {
    expect(differentAnswersInAGroup('abc')).toBe(3);
  });

  test('no answers for a group where everyone answers different', () => {
    expect(differentAnswersInAGroup('abc\nde\nf')).toBe(0);
  });

  test('repeated answers does not count twice', () => {
    expect(differentAnswersInAGroup('abc\nbc\nbc')).toBe(2);
  });
});

describe('acceptance test', () => {
  test('number of different answers', () => {
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
    expect(customCustoms(answers)).toBe(6);
  });

});

describe('answers', () => {
  test('second part', () => {
    const fs = require('fs');
    const answers = fs.readFileSync('input.txt', 'utf8');

    expect(customCustoms(answers)).toBe(3579);
  });
});