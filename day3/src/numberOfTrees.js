function hasATree(position, map) {
  let square = map[position];
  return square === '#';
}

function numberOfTrees(movement, map) {
  let position = 0;
  let numberOfTrees;
  if (hasATree(position, map)) {
    numberOfTrees = 1;
  } else {
    numberOfTrees = 0;
  }
  return numberOfTrees;
}

export {numberOfTrees};
