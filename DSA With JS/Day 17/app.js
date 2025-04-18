const prompt = require("prompt-sync")()

// // Q. 65) Palindromic string using two pointer algorithm. (hint array reverse algo)
// let s = prompt("Enter a string : ");
// let isPalindrome = true;
// let i=0, j=s.length-1;

// while(i<j){
//     if(s[i] != s[j]){
//         isPalindrome = false;
//         break;
//     }
//     i++;
//     j--;
// }

// if(isPalindrome){
//     console.log(`${s} is palindrome!`);
// }
// else{
//     console.log(`${s} is not palindrome`);
// }


// Q. 66) Toggle each alphabet of string
let s = prompt('Enter a string : ');
console.log(`The original string : ${s}`);

let ans = "";
for(let i=0; i<s.length; i++){
    let asci = s.charCodeAt(i);

    // Upper case to lowercase
    if(asci>=65 && asci<=90){
        ans = ans + String.fromCharCode(asci + 32);
    }

    // lowercase to uppercase
    else if(asci>=97 && asci<=122){
        ans = ans + String.fromCharCode(asci - 32);
    }
}

console.log(`The toggle String : ${ans}`);