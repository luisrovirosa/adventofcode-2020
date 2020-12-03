function hasATree(position, map) {
  let square = map[position[1]][position[0]];
  return square === '#';
}

function numberOfTrees(movement, mapAsString) {
  const map = mapAsString.split('\n');
  let numberOfTrees = 0;
  for (let i = 0; movement[1] * i < map.length; i++) {
    if (hasATree([movement[0]*i, movement[1]*i], map)) {
      numberOfTrees++;
    }
  }
  return numberOfTrees;
}

export {numberOfTrees};
