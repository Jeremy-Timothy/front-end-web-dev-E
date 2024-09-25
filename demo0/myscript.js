// tampilkan text
console.log('My name is Semmy Wellem Taju');

// function calculator
function simpleCalculator(operator, num1, num2) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log('Invalid operator');
            return;
    }
    // tampilkan output di console dan alert browser
    console.log(`Result of ${num1} ${operator} ${num2} is: ${result}`);
    alert (`Result is: ${result}`)
}

// call function
simpleCalculator('+', 5, 3)