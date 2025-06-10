# README

# Day 31 of MERN Stack | JS Class-05 🚀  

## Today’s Focus: *Mastering While Loops in JavaScript!* 🔁  

*While loops* are perfect for solving problems that require repeated operations until a condition is met. Here are *three cool applications* we explored:  

### 🔹 Sum of Digits
Finds the sum of all digits in a number. (Example: `123 → 6`)

### 🔹 Reverse a Number
Flips the digits of a number. (Example: `123 → 321`)

### 🔹 Automorphic Number Check
Checks if a number’s square ends with the same digits as the number itself. (Example: `5² = 25 → Automorphic!`)

👉 *Why use while loops?* They’re super useful when you don’t know how many iterations are needed!  

### Example Code:
```javascript
let n = Number(prompt("Enter a number"));
let originaNum = n;

// Sum of Digits
let sum = 0;
while (n > 0) {
    let rem = n % 10;
    sum = sum + rem;
    n = Math.floor(n / 10);
}
console.log("Sum of " + originaNum + " is " + sum);

// Reverse a Number
n = originaNum;
let rev = 0;
while (n > 0) {
    let rem = n % 10;
    rev = (rev * 10) + rem;
    n = Math.floor(n / 10);
}
console.log("Reverse of " + originaNum + " is " + rev);

// Automorphic Number Check
n = originaNum;
let sq = n * n;
let count = 0;
while (n > 0) {
    count++;
    n = Math.floor(n / 10);
}
let lastDigits = sq % Math.pow(10, count);
if (lastDigits === originaNum) {
    console.log(originaNum + " is an automorphic number because last " + count + " digit of " + sq + " is " + lastDigits);
} else {
    console.log(originaNum + " is not an automorphic number because last " + count + " digit of " + sq + " is not " + originaNum);
}
```

What’s your favorite while loop use case? Drop it in the comments! 👇  

#MERN #JavaScript #Coding #ProblemSolving #100DaysOfCode  

Happy Coding! 🚀

