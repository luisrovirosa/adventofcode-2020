fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf8');
const numbers = file.split('\n').slice(0, -1); // Phpstorm adds an empty line at the end of the file

function find2020InGroupsOf2() {
    const combinationsOf2Elements = numbers.flatMap(
        (v, i) => numbers.slice(i + 1).map(w => [parseInt(v), parseInt(w)]),
    );

    const [number1, number2] = combinationsOf2Elements.find(([a, b]) => (a + b) === 2020);
    console.log({number1, number2});

    const result = number1 * number2;
    console.log(result);
}

find2020InGroupsOf2();

function find2020InGroupsOf3() {
    let combinationsOf3Elements = [];
    for (i = 0; i < numbers.length - 2; i++) {
        for (j = i + 1; j < numbers.length - 1; j++) {
            for (k = j + 1; k < numbers.length; k++) {
                combinationsOf3Elements.push([parseInt(numbers[i]), parseInt(numbers[j]), parseInt(numbers[k])]);
            }
        }
    }

    const [number1, number2, number3] = combinationsOf3Elements.find(([a, b, c]) => (a + b + c) === 2020
    );
    console.log({number1, number2, number3});

    const result = number1 * number2 * number3;
    console.log(result);
}

find2020InGroupsOf3();
