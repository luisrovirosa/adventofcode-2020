import {numberOfTrees, secondPart} from './trajectory';

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

describe('extends the world', () => {
  it('once', () => {
    let map = '..\n.#\n.#\n.#';
    expect(numberOfTrees([1, 1], map)).toBe(2);
  });

  it('twice', () => {
    let map = '..\n.#\n.#\n.#\n..\n.#\n.#\n.#';
    expect(numberOfTrees([1, 1], map)).toBe(4);
  });

  it('three times', () => {
    let map = '..\n.#\n.#\n.#\n..\n.#\n.#\n.#\n..\n.#\n.#\n.#';
    expect(numberOfTrees([1, 1], map)).toBe(6);
  });
});

describe('moves 2 in vertical trajectory', () => {
  test('find two tree when first and second movement has a tree', () => {
    let map =
        '............#......#..#.....#..\n' +
        '.#..........#......#..#.....#..\n' +
        '.##.........#......#..#.....#..';
    expect(numberOfTrees([1, 2], map)).toBe(1);
  });
});

describe('acceptance test', () => {
  test('simplified: without having to extend the world', () => {
    let map =
        '..##.........##.........##.........##.........##.........##.......\n' +
        '#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..\n' +
        '.#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.\n' +
        '..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#\n' +
        '.#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.\n' +
        '..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....\n' +
        '.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#\n' +
        '.#........#.#........#.#........#.#........#.#........#.#........#\n' +
        '#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...\n' +
        '#...##....##...##....##...##....##...##....##...##....##...##....#\n' +
        '.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#';
    expect(numberOfTrees([3, 1], map)).toBe(7);
  });

  test('real one', () => {
    let map =
        '..##.......\n' +
        '#...#...#..\n' +
        '.#....#..#.\n' +
        '..#.#...#.#\n' +
        '.#...##..#.\n' +
        '..#.##.....\n' +
        '.#.#.#....#\n' +
        '.#........#\n' +
        '#.##...#...\n' +
        '#...##....#\n' +
        '.#..#...#.#';
    expect(numberOfTrees([3, 1], map)).toBe(7);
  });

  test('second part real one', () => {
    let map =
        '..##.......\n' +
        '#...#...#..\n' +
        '.#....#..#.\n' +
        '..#.#...#.#\n' +
        '.#...##..#.\n' +
        '..#.##.....\n' +
        '.#.#.#....#\n' +
        '.#........#\n' +
        '#.##...#...\n' +
        '#...##....#\n' +
        '.#..#...#.#';

    expect(secondPart(map)).toBe(336);
  });

});

describe('solutions', () => {
  test('first part', () => {
    const fs = require('fs');
    const map = fs.readFileSync('input.txt', 'utf8');

    expect(numberOfTrees([3, 1], map)).toBe(247);
  });

  test('second part', () => {
    const fs = require('fs');
    const map = fs.readFileSync('input.txt', 'utf8');

    expect(secondPart(map)).toBe(2855588736);
  });

});


