function hasATree(position, map) {
  let square = map[position];
  return square === '#';
}

function numberOfTrees(movement, map) {
  let position = 0;
  if (hasATree(position, map)) {
    return 1;
  } else {
    return 0;
  }
}

export {numberOfTrees};
