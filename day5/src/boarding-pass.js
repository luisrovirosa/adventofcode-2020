function binaryPartition(accumulator, position) {
  const halfDistance = (accumulator[1] - accumulator[0] + 1) / 2;
  return position === 'F'
      ? [accumulator[0], accumulator[1] - halfDistance]
      : [accumulator[0] + halfDistance, accumulator[1]];
}

function row(boardingPass) {
  return boardingPass.slice(0, 7).split('').reduce(binaryPartition, [0, 127])[0];
}

export {row};
