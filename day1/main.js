fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf8');
const numbers = file.split("\n")

const combinations = numbers.flatMap(
    (v, i) => numbers.slice(i+1).map( w => [parseInt(v),parseInt(w)] )
);

const combination = combinations.find((combination) => (combination[0] + combination[1]) === 2020)
console.log(combination);

const result = combination[0] * combination[1]
console.log(result);
