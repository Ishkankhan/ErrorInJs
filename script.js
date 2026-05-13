// Arrow function that returns a Promise
const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }
    });
};

// Dummy test values
divideNumbers(10, 2)
    .then(result => console.log("Result:", result))
    .catch(error => console.error(error));

divideNumbers(10, 0)
    .then(result => console.log("Result:", result))
    .catch(error => console.error(error));
