function validateAge() {
     age = prompt("Please enter your age:");
    const resultMessage = document.getElementById("resultMessage");

    if (!age || age.trim() === "" ) {
        resultMessage.textContent = "Please enter your age.";
        resultMessage.style.color = "red";
    } else if (isNaN(age)) {
        resultMessage.textContent = "Please enter a valid number.";
        resultMessage.style.color = "red";
    } else if ((age) >= 18) {
        resultMessage.textContent = "You are eligible to vote.";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "You are not eligible to vote.";
        resultMessage.style.color = "red";
    }
}


//Sum of the numbers

function calculateSum() {
    const n = prompt("Enter a positive integer:");
    const resultMessage = document.getElementById("sumResultMessage");

    // Check if the user entered a valid number
    if (!n || isNaN(n) || n <= 0 || !Number.isInteger(parseFloat(n))) {
        resultMessage.textContent = "Please enter a valid positive integer.";
        resultMessage.style.color = "red";
        return;
    }

    // Parse the input to an integer
    const num = parseInt(n);
    let sum = 0;

    // Calculate the sum of first n natural numbers
    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    // Display the result
    resultMessage.textContent = `The sum of the first ${num} natural numbers is ${sum}.`;
    resultMessage.style.color = "green";
}



// Function to check if a number is even or odd
function checkOddOrEven() {
    const number = prompt("Enter a number to check if it's even or odd:");
    const evenOddResult = document.getElementById("evenOddResult");

    if (!number || isNaN(number)) {
        evenOddResult.textContent = "Please enter a valid number.";
        evenOddResult.style.color = "red";
        return;
    }

    if (number % 2 === 0) {
        evenOddResult.textContent = `${number} is even.`;
        evenOddResult.style.color = "green";
    } else {
        evenOddResult.textContent = `${number} is odd.`;
        evenOddResult.style.color = "green";
    }
}


//Mutiplication table
function generateMultiplicationTable() {
    const number = prompt("Enter a number to generate the multiplication table:");
    const range = 10;  // Set a default range of 10 for the table
    const multiplicationTableResult = document.getElementById("multiplicationTableResult");

    if (!number || isNaN(number)) {
        multiplicationTableResult.textContent = "Please enter a valid number.";
        multiplicationTableResult.style.color = "red";
        return;
    }

    let table = "";
    for (let i = 1; i <= range; i++) {
        table += `${number} x ${i} = ${number * i}<br>`;
    }

    multiplicationTableResult.innerHTML = table;
    multiplicationTableResult.style.color = "green";
}



function performCalculation() {
    // Prompt user to enter the first number
    const num1 = parseFloat(prompt("Enter the first number:"));

    // Validate the first number
    if (isNaN(num1)) {
        alert("Please enter a valid number.");
        return;
    }

    // Prompt user to enter the second number
    const num2 = parseFloat(prompt("Enter the second number:"));

    // Validate the second number
    if (isNaN(num2)) {
        alert("Please enter a valid number.");
        return;
    }

    // Ask user to choose an operation
    const operation = prompt("Choose an operation: +, -, *, /");

    // Get the result of the operation
    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Error: Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation. Please choose +, -, *, or /.");
            return;
    }

    // Display the result
    const calculationResult = document.getElementById("calculationResult");
    calculationResult.textContent = `Result: ${num1} ${operation} ${num2} = ${result}`;
    calculationResult.style.color = "green";
}
