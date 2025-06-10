# Day 32 of MERN Stack | JS Class-06 🚀

# Mastering the Do-While Loop in JavaScript 🚀

## Overview
Loops are a fundamental part of programming, and the **do-while** loop is an excellent way to execute code *at least once* before checking a condition. This project explores three fun and practical implementations of the **do-while** loop in JavaScript.

## Why Use a Do-While Loop?
- Ensures the loop executes *at least once*, even if the condition is false.
- Useful for interactive programs that require user input.
- Ideal for scenarios where execution must happen before validation.

## Implementations 🏗️

### 1️⃣ Repeat "Hello World"
A simple implementation that keeps printing **"Hello World"** until the user decides to stop.
```javascript
let userResponse;
do {
    console.log("Hello World");
    userResponse = prompt("Do you want to print again? (yes/no)");
} while (userResponse.toLowerCase() === "yes");
```

### 2️⃣ Guess the Number Game 🎯
A fun game where a random number is generated, and the user keeps guessing until they get it right!
```javascript
const randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10: "));
    if (guess > randomNumber) {
        console.log("Too high! Try again.");
    } else if (guess < randomNumber) {
        console.log("Too low! Try again.");
    }
} while (guess !== randomNumber);
console.log("Congratulations! You guessed it right!");
```

### 3️⃣ Sasta Calculator 🧮
A simple calculator that keeps running until the user wants to exit.
```javascript
let choice;
do {
    let num1 = parseFloat(prompt("Enter first number: "));
    let num2 = parseFloat(prompt("Enter second number: "));
    let operation = prompt("Choose operation (+, -, *, /): ");
    
    switch (operation) {
        case '+':
            console.log(`Result: ${num1 + num2}`);
            break;
        case '-':
            console.log(`Result: ${num1 - num2}`);
            break;
        case '*':
            console.log(`Result: ${num1 * num2}`);
            break;
        case '/':
            console.log(`Result: ${num1 / num2}`);
            break;
        default:
            console.log("Invalid operation!");
    }
    choice = prompt("Do you want to continue? (yes/no)");
} while (choice.toLowerCase() === "yes");
```

## Key Takeaways 🎯
- The **do-while** loop ensures at least one execution before condition checking.
- Useful for interactive programs that require user input.
- Perfect for implementing menus, games, and repetitive tasks with user confirmation.

## Try it Yourself 💡
Run these scripts in your browser console or a JavaScript environment and see how they work!

Happy Coding! 🚀

---
**Author:** [Your Name]  
**Tags:** `JavaScript`, `Do-While Loop`, `Web Development`, `MERN Stack`