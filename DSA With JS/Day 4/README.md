# JavaScript Learning - Day 30 | MERN Stack

## 🚀 JS Class-04: Loops, User Input, and Problem-Solving

### Overview
This session focused on fundamental JavaScript concepts related to loops, user input handling, and number operations. By implementing various problems, we reinforced our understanding of iterative logic and built a strong foundation for future development.

## 🛠 Topics Covered

### ✔ Do-While Loops
- Implemented a simple **"Hello World"** repeater.
- Developed a **number guessing game**.
- Built a **basic calculator** using a loop structure.

### ✔ For Loops
- Explored **printing patterns**.
- Generated multiplication **tables** for user-input numbers.
- Calculated the **sum of natural numbers**.
- Implemented logic to **compute factorials**.
- Checked whether a **number is prime or not**.

### ✔ Number Operations
- Found **factors** of a given number.
- Optimized **prime number checking** using `Math.sqrt(n)`.
- Calculated the **power of a number** using `Math.pow()`.

## 📌 Code Snippets

### 1️⃣ Print "Hello World" N Times
```javascript
let n = Number(prompt("Enter a number"));
if (isNaN(n)) {
    console.log("Invalid input");
} else {
    for (let i = 0; i < n; i++) {
        console.log("Hello World");  
    }
}
```

### 2️⃣ Print Natural Numbers Up to N
```javascript
let n = Number(prompt("Enter a number:"));
if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive number");
} else {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
```

### 3️⃣ Multiplication Table
```javascript
let n = Number(prompt("Enter a number:"));
if (!isNaN(n)) {
    console.log(`Table of ${n}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}
```

### 4️⃣ Sum of N Natural Numbers
```javascript
let n = Number(prompt("Enter a number:"));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(`Sum of first ${n} natural numbers is ${sum}`);
```

### 5️⃣ Factorial Calculation
```javascript
let n = Number(prompt("Enter a number:"));
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i;
}
console.log(`Factorial of ${n} is ${fact}`);
```

### 6️⃣ Check Prime Number
```javascript
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
let num = Number(prompt("Enter a number:"));
console.log(isPrime(num) ? `${num} is Prime` : `${num} is not Prime`);
```

### 7️⃣ Power Calculation
```javascript
let a = Number(prompt("Enter base number:"));
let b = Number(prompt("Enter exponent:"));
console.log(`${a}^${b} = `, Math.pow(a, b));
```

## 🎯 Key Takeaways
- **Loops** are powerful tools for iteration in JavaScript.
- **User input handling** ensures that data is processed correctly.
- **Number operations** like finding factors, factorial, and prime numbers help build strong problem-solving skills.
- **Math functions** (`Math.pow`, `Math.sqrt`) simplify complex calculations.

💡 **Excited for the next session!** Keep coding and stay consistent. 🔥

---

#100DaysOfCode #JavaScript #MERNStack #WebDevelopment #CodingJourney

