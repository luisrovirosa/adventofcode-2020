import {customCustoms, differentAnswersInAGroup} from './custom-customs';

describe('single groups', () => {
   test('count the answers of 1 person group', () => {
       expect(differentAnswersInAGroup('abc')).toBe(3);
    });

   test('count the answers of multiple person group', () => {
       expect(differentAnswersInAGroup('abc\nde\nf')).toBe(6);
    });

   test('repeated answers does not count twice', () => {
       expect(differentAnswersInAGroup('abc\nbc')).toBe(3);
    });
});

xdescribe('acceptance test', () => {
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
        expect(customCustoms(answers)).toBe(11);
    });

});
