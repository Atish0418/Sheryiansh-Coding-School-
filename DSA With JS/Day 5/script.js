// While loop
// 1) Sum of digits. 123 => 6
let n = Number(prompt("Enter a number"));
let originaNum = n;

// let sum = 0;
// while(n>0){
//     let rem = n%10;
//     sum = sum + rem;
//     n = Math.floor(n/10); // quotient
// }
// console.log("Sum of " +originaNum+ " is " +sum);

// 2) Reverse a number. 123 => 321
// let rev = 0;
// while(n>0){
//     let rem = n%10;
//     rev = (rev*10) + rem;
//     n = Math.floor(n/10); //quotient
// }
// console.log("Reverse of " +originaNum+ " is " +rev);

// 3) Automorphic number
// An automorphic number is a number whose square ends in the same digits as the number itself. A number n is called automorphic. 
// n = 5: n^2 = 25. Last digit of 25 is 5, so 5 is automorphic.
let sq = n*n;
let count = 0;
while(n>0){
    count++;
    n = Math.floor(n/10); //quotient
}

let lastDigits = sq % Math.pow(10, count);

if( lastDigits  === originaNum){
    console.log(originaNum+ " is an automorphic number because last " +count+ " digit of " +sq+ " is " +lastDigits);
}
else{
    console.log(originaNum+ " is not an automorphic number because last " +count+ " digit of " +sq+ " is not " +originaNum);
}

    

