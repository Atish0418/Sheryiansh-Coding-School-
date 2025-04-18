// Methods of String
const prompt = require("prompt-sync")()

// 1) length()
// let s = 'Sheryians';
// console.log(`Length of ${s} is ${s.length}`);

// 2) slice(start, end)
// console.log(`Slice gives a substring of ${s} as (3,6) ${s.slice(3, 6)}`)
// console.log(`Slice can also accpect negative values and print substring (-4, -1): ${s.slice(-4, -1)}`);

// 3) substring(start)
// console.log(`.substring gives the substring of ${s} as (5,9) ${s.substring(5,9)}`);

// 4) toUpperCase()
// console.log(`Converts ${s} to uppercase as ${s.toUpperCase()}`);

// 5) toLowerCase()
// let str = 'SHERYIANS';
// console.log(`Converts ${str} to lowercase as ${s.toLowerCase()}`);

// 6) concat()
// let s2 = " Coding School";
// console.log(`Concat ${s} and ${s2} as ${s.concat(s2)}`)

// 7) trim()
// let str2 = '    Atish      ';
// console.log(`.trim() => trims the the trailing spaces and print the string : ${str2.trim()}`)

// 8) indexOf(substring) 
// console.log(`It gives the index of the substring (${s.substring(5,9)}) of first charachter as : ${s.indexOf("ians")}`)

// 9) lastIndexOf() 
// Searches from the end (right to left) of the string.
// Returns the last occurrence of the specified value.
// console.log(`It gives the last index of substring (${s.substring(5,9)}) : ${s.lastIndexOf("ians")}`);

// 10) includes(substring)
// checks if substring exists
// console.log(s.includes("ians"));

// 11) startWith(substring)
// console.log(s.startsWith("ians"));
// console.log(s.startsWith("S"));

// 12) endsWith(substring)
// console.log(s.endsWith('n'));
// console.log(s.endsWith('s'));

// 13) replace(onload, new);
// function replace(original, toReplace, newPart) {
//     return original.replace(toReplace, newPart);
// }
// console.log(replace("Sheryians", "ians", "code"));

// 14) replaceAll()
// let s2 = "Sheryiansiansians";
// let replaced = s2.replaceAll("ians", "code");
// console.log(replaced);

// 15) split(separator)
// Split every character:
// console.log(s.split(""));  

// // Split on "y":
// console.log(s.split("y"));  

// // Split on nothing (whole string remains as one element):
// console.log(s.split());  


// 16) charAt(index)
// console.log(s.charAt(0));

// 17) charCodeAt(inndex)
// console.log(s.charCodeAt(0));


// Q.63) Accept a string from a user and prints its each charachter on a new line
// let s = prompt("Enter a string : ");

// for(let i=0; i<s.length; i++){
//     console.log(s.charAt(i));
// }


// Q. 64) Accept a string and print it in reverse order
let s = prompt("Enter a string : ");
let rev = "";
for(let i=s.length-1; i>=0; i--){
    rev = rev + s.charAt(i);
}
console.log(rev);