function numberOfTrees(movement, map) {
  let position = 0;
  let square = map[position];
  let hasATree = square === '#';
  return hasATree ? 1 : 0;
}

export {numberOfTrees};
