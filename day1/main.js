fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf8');
const numbers = file.split('\n').slice(0, -1); // Phpstorm adds an empty line at the end of the file

function find2020InGroupsOf2() {
    const combinationsOf2Elements = numbers.flatMap(
        (x, i) => numbers.slice(i + 1).map(y => [parseInt(x), parseInt(y)]),
    );

    const [number1, number2] = combinationsOf2Elements.find(([a, b]) => (a + b) === 2020);
    console.log({number1, number2});

    const result = number1 * number2;
    console.log(result);
}

find2020InGroupsOf2();

function find2020InGroupsOf3() {
    const combinationsOf3Elements = numbers.flatMap(
        (x, i) => numbers.slice(i + 1).flatMap(
            (y, j) => numbers.slice(i + j + 1).map(w => [parseInt(x), parseInt(y), parseInt(w)]),
        ),
    );

    const [number1, number2, number3] = combinationsOf3Elements.find(([a, b, c]) => (a + b + c) === 2020
    );
    console.log({number1, number2, number3});

    const result = number1 * number2 * number3;
    console.log(result);
}

find2020InGroupsOf3();
