import {numberOfTrees} from './trajectory';

describe('No trajectory', () => {
  test('find no tree when the initial position has no tree', () => {
    expect(numberOfTrees([1, 1], '.#..........#......#..#.....#..')).toBe(0);
  });

  test('find one tree when the initial position has a tree', () => {
    expect(numberOfTrees([1, 1], '#...........#......#..#.....#..')).toBe(1);
  });
});

describe('1 movement trajectory', () => {
  test('find one tree when the final position has a tree', () => {
    let map = '.#..........#......#..#.....#..\n.#..........#......#..#.....#..';
    expect(numberOfTrees([1, 1], map)).toBe(1);
  });

  test('find no tree when the final position has no tree', () => {
    let map = '.#..........#......#..#.....#..\n.#..........#......#..#.....#..';
    expect(numberOfTrees([2, 1], map)).toBe(0);
  });

});

describe('2 movement trajectory', () => {
  test('find two tree when first and second movement has a tree', () => {
    let map =
        '.#..........#......#..#.....#..\n' +
        '.#..........#......#..#.....#..\n' +
        '..#.........#......#..#.....#..';
    expect(numberOfTrees([1, 1], map)).toBe(2);
  });
  test('find one tree when only first movement has a tree', () => {
    let map =
        '............#......#..#.....#..\n' +
        '.#..........#......#..#.....#..\n' +
        '............#......#..#.....#..';
    expect(numberOfTrees([1, 1], map)).toBe(1);
  });
});
