function highest(boardingPasses){
  return boardingPasses.split('\n').map(id).sort((a,b) => b - a)[0];
}

function id(boardingPass) {
  return row(boardingPass)* 8 + column(boardingPass);
}

function row(boardingPass) {
  let rows = boardingPass.slice(0, 7).split('');
  return rows.reduce(partitionBy('F'), [0, 127])[0];
}

function column(boardingPass) {
  const columns = boardingPass.slice(7).split('');
  return columns.reduce(partitionBy('L'), [0, 7])[0];
}

function partitionBy(firstPartLetter) {
  return (accumulator, position) => binaryPartition(firstPartLetter, accumulator, position);
}

function binaryPartition(firstPartLetter, accumulator, position) {
  const halfDistance = (accumulator[1] - accumulator[0] + 1) / 2;
  return position === firstPartLetter
      ? [accumulator[0], accumulator[1] - halfDistance]
      : [accumulator[0] + halfDistance, accumulator[1]];
}

export {row, column, id, highest};
