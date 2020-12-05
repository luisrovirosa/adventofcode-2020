function binaryPartition(firstPartLetter, accumulator, position) {
  const halfDistance = (accumulator[1] - accumulator[0] + 1) / 2;
  return position === firstPartLetter
      ? [accumulator[0], accumulator[1] - halfDistance]
      : [accumulator[0] + halfDistance, accumulator[1]];
}

function extracted(firstPartLetter) {
  return (accumulator, position) => binaryPartition(firstPartLetter, accumulator, position);
}

function row(boardingPass) {
  let rows = boardingPass.slice(0, 7).split('');
  return rows.reduce(extracted('F'), [0, 127])[0];
}

function column(boardingPass) {
  const columns = boardingPass.slice(7).split('');
  return columns.reduce(extracted('L'), [0, 7])[0];
}

export {row, column};
