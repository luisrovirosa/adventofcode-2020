function hasATree(x, y, map) {
  let square = map[y][x];
  return square === '#';
}

function numberOfTrees(movement, mapAsString) {
  let map = mapAsString.split('\n');
  let numberOfTrees = 0;
  let x = 0;
  let y = 0;
  while (y < map.length) {
    if (x > map[0].length){
      map = map.map((row) => row + row);
    }
    if (hasATree(x, y, map)) {
      numberOfTrees++;
    }
    x += movement[0];
    y += movement[1];
  }
  return numberOfTrees;
}

export {numberOfTrees};
