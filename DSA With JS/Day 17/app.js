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


// // Q. 66) Toggle each alphabet of string
// let s = prompt('Enter a string : ');
// console.log(`The original string : ${s}`);

// let ans = "";
// for(let i=0; i<s.length; i++){
//     let asci = s.charCodeAt(i);

//     // Upper case to lowercase
//     if(asci>=65 && asci<=90){
//         ans = ans + String.fromCharCode(asci + 32);
//     }

//     // lowercase to uppercase
//     else if(asci>=97 && asci<=122){
//         ans = ans + String.fromCharCode(asci - 32);
//     }
// }

// console.log(`The toggle String : ${ans}`);

// // Q. 67) Take an array of strings words and a string prefix. Print the number of strings in words that contain pref as prefix
// //        words = ["pay", "attention", "practice", "attend"];

// let words = prompt("Enter the words : ").split(" ");
// let pref = "at";
// let count = 0;

// for(let i=0; i<words.length; i++){
//     if(words[i].startsWith(pref)){
//         count++;
//     }
// }

// console.log(count);

// Q. 68) Capatalize first and last character ch of each word in the sentence and print the new sentence
let s = prompt("Enter a sentence : ").split(" ");
console.log(`Original sentence : ${s}`);
let ans = "";

for(let i=0; i<s.length; i++){
    let word = s[i];
    if(word.length<=2){
        ans = ans + word.toUpperCase()+" ";
    }
    else{
        ans = ans + word.charAt(0).toUpperCase() + word.substring(1, word.length-1) + word.charAt(word.length-1).toUpperCase()+" ";
    }
}
console.log(`New sentence : ${ans}`);