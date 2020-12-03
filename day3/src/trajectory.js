function hasATree(position, map) {
  let square = map[position[0]][position[1]];
  return square === '#';
}

function numberOfTrees(movement, mapAsString) {
  const map = mapAsString.split('\n');
  let numberOfTrees = 0;
  for (let i = 0; movement[1] * i < map.length; i++) {
    if (hasATree([movement[1]*i, movement[0]*i], map)) {
      numberOfTrees++;
    }
  }
  return numberOfTrees;
}

export {numberOfTrees};
