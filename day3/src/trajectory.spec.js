import {numberOfTrees} from './numberOfTrees';

describe('No trajectory', () => {
  test('find no tree when the initial position has no tree', () => {
    expect(numberOfTrees([], '.#..........#......#..#.....#..')).toBe(0);
  });

  test('find one tree when the initial position has a tree', () => {
    expect(numberOfTrees([], '#...........#......#..#.....#..')).toBe(1);
  });
});

describe('1 movement trajectory', () => {
  xtest('find no tree when the initial position has no tree', () => {
    let map = '.#..........#......#..#.....#..\n.#..........#......#..#.....#..';
    expect(numberOfTrees([1, 1], map)).toBe(1 );
  });

});
