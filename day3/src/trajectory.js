function hasATree(position, map) {
  let square = map[position[0]][position[1]];
  return square === '#';
}

function numberOfTrees(movement, mapAsString) {
  const map = mapAsString.split('\n');

  let position = [0, 0];
  let numberOfTrees = 0;
  if (hasATree(position, map)) {
    numberOfTrees++;
  }
  if (movement.length !== 0) {
    if (hasATree([1, 1], map)) {
      numberOfTrees++;
    }
  }
  return numberOfTrees;
}

export {numberOfTrees};
