firstNumber = prompt('Enter the first number');
secondNumber = prompt('Enter the second number');
sum = (+firstNumber) + (+secondNumber);
minus = firstNumber - secondNumber;
multiply = firstNumber * secondNumber;
division = firstNumber / secondNumber;
alert(`
${firstNumber}+${secondNumber}=${sum}
${firstNumber}-${secondNumber}=${minus}
${firstNumber}*${secondNumber}=${multiply}
${firstNumber}/${secondNumber}=${division}
`);


