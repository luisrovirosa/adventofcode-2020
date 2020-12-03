import {numberOfTrees} from './numberOfTrees';

describe('No trajectory', () => {
    test('find no tree when the initial position has no tree', () => {
        expect(numberOfTrees([], '.#..........#......#..#.....#..')).toBe(0);
    });

    test('find one tree when the initial position has a tree', () => {
        expect(numberOfTrees([], '#...........#......#..#.....#..')).toBe(1);
    });

});
