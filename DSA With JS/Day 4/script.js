// 1) print "Hello World n times"
// let n = Number(prompt("Enter a number"));

// if(isNaN(n)){
//     console.log("Invalid input");
// }
// else{
//     let i;
// for(i=0; i<=n; i++){
//     console.log("Hello World");  
// }
// console.log("fail at " +i);
// }


// 2) print natural upto n
// let input = prompt("Enter a number : ");
// let n = Number(input); // converted into number

// if (input.trim() === "") {
//     console.log("Input should not be empty");
// }
// else if (isNaN(n)) {
//     console.log(input+ (" is invalid number. \nplease enter a valid number. (for example 1, 2, 3,...)"));
// }
// else {
//     let i;
//     for (i = 1; i <= n; i++) {
//         console.log("Natural numbers : " + i);
//     }
//     console.log("failed at " + i);
// }


// 3) take a number from user print its table
// else{
//     console.log("Table of " +n+ " is " );
//     for(let i=1; i<=10; i++){
//         console.log( n+ " * " +i+ " = " + (n*i));
//     }
// }

// 4) Print sum of n natural numbers
// else{
//     let sum = 0;
//     let numbers = [];
//     for(let i=1; i<=n; i++){
//         sum = sum + i;
//         numbers.push(i);
//     }
//     console.log(`Sum of ${numbers.join(", ")} is ${sum}`);
// }

// 5) Factorial of a number
// else{
//     let fact = 1;
//     let numbers = [];

//     for(let i=1; i<=n; i++){
//         fact = fact*i;
//         numbers.push(i);
//     }
//     console.log(`Factorial of ${numbers.join(", ")} is ${fact}`);
// }

// 6) Print the sum of all even and odd numbers in a range seperately.
// else{
//     let evenSum = 0;
//     let oddSum = 0;

//     let evenNumbers = [];
//     let oddNumbers = [];

//     for(let i=1; i<=n; i++){
//         if(i%    2 === 0){
//             evenSum = evenSum + i;
//             evenNumbers.push(i);
//         }
//         else{
//             oddSum = oddSum + i;
//             oddNumbers.push(i);
//         }
//     }
//     console.log(`Sum of even numbers [${evenNumbers.join(", ")}] is ${evenSum}`);
//     console.log(`Sum of odd numbers [${oddNumbers.join(", ")}] is ${oddSum}`);
// }   

// 7) Print all the factors of a number. (Completely divisible numbers)
// else{
//     console.log(`The factors of ${n} are `);
//     for(let i=1; i<=n; i++){ // n = 10
//         if(n % i === 0){
//             // console.log(`the factors of ${n} are `);
//             console.log(i); //1, 2, 5, 10
//         }
//     }
// }

// 8) Check the number is prime or not ? (Even prime number is only one 2)
// else{
//     let isPrime = true;

//     for(i=2; i<=Math.floor(Math.sqrt(n)); i++){ // also i<n
//         if(n % 2 === 0){
//             isPrime = false;
//             break;   
//         }
//     }

//     if(isPrime){
//         console.log("YES!, " +n+ " is a prime number");
//     }
//     else{
//         console.log("NO!, " +n+ " is not a prime number");
//     }
// }
// 
// Optimized approach. TC = O(sqrt(n))
// else{
//     let isPrime = isPrimeFnc(n);
//     if(isPrime){
//         console.log(n+ " is a prime number!");
//     }
//     else{
//         console.log(n+ " is not a prime number!"); 
//     }

//     function isPrimeFnc(n){
//         if(n<=1) return false;
//         if(n==2) return true;
//         if(n%2 === 0) return false;

//         for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){
//             if( n % i === 0) return false;
//         }
//         return true;
//     }
// }

// 9) Calculate Power of a number
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

console.log(Math.pow(a,b));


function isPrime(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(n) ? `${n} is Prime` : `${n} is not Prime`);