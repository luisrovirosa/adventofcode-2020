function hasATree(position, map) {
  let square = map[position[0]][position[1]];
  return square === '#';
}

function numberOfTrees(movement, mapAsString) {
  const map = mapAsString.split('\n');

  let position = [0, 0];
  let numberOfTrees = 0;
  if (map.length >= 1) {
    if (hasATree([movement[1]*0, movement[0]*0], map)) {
      numberOfTrees++;
    }
  }
  if (map.length >= 2) {
    if (hasATree([movement[1]*1, movement[0]*1], map)) {
      numberOfTrees++;
    }
  }
  if (map.length >= 3){
    if (hasATree([movement[1]*2, movement[0]*2], map)) {
      numberOfTrees++;
    }
  }
  return numberOfTrees;
}

export {numberOfTrees};
