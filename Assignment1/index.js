const math = require('./lib/math');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        const addition = math.add(parseFloat(num1), parseFloat(num2));
        const subtraction = math.sub(parseFloat(num1), parseFloat(num2));
        const multiplication = math.mult(parseFloat(num1), parseFloat(num2));
        const division = math.div(parseFloat(num1), parseFloat(num2));

        console.log('Result of addition:', addition);
        console.log('Result of subtraction:', subtraction);
        console.log('Result of multiplication:', multiplication);
        console.log('Result of division:', division);

        const content = `Result of addition is ${addition}\nResult of subtraction is ${subtraction}\nResult of multiplication is ${multiplication}\nResult of division is ${division}\n`;
        fs.writeFile('Solution.csv', content, err => {
            if (err) {
                console.error(err);
            } else {
                console.log('Results written to Solution.csv');
            }
            rl.close();
        });
    });
});
