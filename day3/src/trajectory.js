function numberOfTrees(movement, mapAsString) {
  let map = mapAsString.split('\n');
  let numberOfTrees = 0;
  let x = 0;
  let y = 0;
  while (hasNotArrived(y, map)) {
    if (doesNotFitInTheMap(x, map)) {
      map = extendTheMap(map);
    }
    if (hasATree(x, y, map)) {
      numberOfTrees++;
    }
    x += movement[0];
    y += movement[1];
  }
  return numberOfTrees;
}

function hasNotArrived(y, map) {
  return y < map.length;
}

function doesNotFitInTheMap(x, map) {
  return x > map[0].length;
}

function extendTheMap(map) {
  return map.map((row) => row + row);
}

function hasATree(x, y, map) {
  let square = map[y][x];
  return square === '#';
}

export {numberOfTrees};
