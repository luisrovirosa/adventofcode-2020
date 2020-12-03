function hasATree(position, map) {
  let square = map[position];
  return square === '#';
}

function numberOfTrees(movement, map) {
  let position = 0;
  return hasATree(position, map) ? 1 : 0;
}

export {numberOfTrees};
