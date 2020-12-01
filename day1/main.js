fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf8');
const numbers = file.split("\n")

const combinations = numbers.flatMap(
    (v, i) => numbers.slice(i+1).map( w => [parseInt(v),parseInt(w)] )
);

const [number1, number2] = combinations.find(([a, b]) => (a + b) === 2020)
console.log(number1, number2);

const result = number1 * number2
console.log(result);
