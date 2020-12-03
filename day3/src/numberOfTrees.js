function hasATree(position, map) {
  let square = map[0][position];
  return square === '#';
}

function numberOfTrees(movement, mapAsString) {
  const map = mapAsString.split('\n');
  let position = 0;
  let numberOfTrees = 0;
  if (hasATree(position, map)) {
    numberOfTrees++;
  }
  return numberOfTrees;
}

export {numberOfTrees};
