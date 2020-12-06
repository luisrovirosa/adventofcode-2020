import {customCustoms} from './custom-customs';

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
