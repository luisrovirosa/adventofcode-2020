function mySeat(boardingPasses) {
  let seatsNoConsecutive = occupiedSeats(boardingPasses).eachCons(2).find((seats) => (seats[0] - seats[1]) === 2);

  return seatsNoConsecutive[0] - 1;
}

function highest(boardingPasses) {
  return (occupiedSeats(boardingPasses))[0];
}

function occupiedSeats(boardingPasses) {
  return boardingPasses.split('\n').map(id).sort((a, b) => b - a);
}

function id(boardingPass) {
  const binaryConverter = {'F': 0, 'B': 1, 'L': 0, 'R': 1};
  return parseInt(boardingPass.split('').map((l) => binaryConverter[l]).join(''), 2);
}

function row(boardingPass) {
  return id(boardingPass.slice(0, 7));
}

function column(boardingPass) {
  return id(boardingPass.slice(7));
}

Array.prototype.eachCons = function(num) {
  return Array.from({length: this.length - num + 1},
      (_, i) => this.slice(i, i + num));
};
export {row, column, id, highest, mySeat};
