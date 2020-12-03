function hasATree(position, map) {
  let square = map[position];
  return square === '#';
}

function numberOfTrees(movement, map) {
  let position = 0;
  let numberOfTrees = 0;
  if (hasATree(position, map)) {
    numberOfTrees++;
  }
  return numberOfTrees;
}

export {numberOfTrees};
