const prompt = require("prompt-sync")();

// // Q. 68) Accept the string and print the frequency of each character present in the string,
// let s = prompt("Enter a string : ");
// let freqArr = new Array(123).fill(0);

// for(let i=0; i<s.length; i++){
//     let asci = s.charCodeAt(i);
//     freqArr[asci] = freqArr[asci] + 1;
// }

// for(let i=0; i<freqArr.length; i++){
//     if(freqArr[i]>0){
//         console.log(String.fromCharCode(i)+" -> "+freqArr[i]);
//     }
// }


// // Q. 69) Check the given string is anagram or not
// let s1 = prompt("Enter string one : ");
// let s2 = prompt("Enter string two : ");
// let freqArr = new Array(123).fill(0);

// if (s1.length != s2.length) {
//     console.log("Given strings are not anagram");
// }
// else {
//     let isAnagram = true;
//     for (let i = 0; i < s1.length; i++) {
//         let asci = s1.charCodeAt(i);
//         freqArr[i] = freqArr[i] + 1;
//     }

//     for (let i = 0; i < s2.length; i++) {
//         let asci = s2.charCodeAt(i);
//         freqArr[i] = freqArr[i] - 1;
//     }

//     for(let i=0; i<freqArr.length; i++){
//         if(freqArr[i]!=0){
//             isAnagram = false;
//             break;
//         }
//     }

//     if(isAnagram){
//         console.log("Given strings are anagram");
//     }
//     else{
//         console.log("Given strings are not anagram");
//     }
// }


// Q. 69) Check the string is panagram or not 
// input : thequickbrownfoxjumpsoverthelazydog
let s = prompt("Enter a string : ");
let set = new Set();

for(let i=0; i<s.length; i++){
    let ch = s.charAt(i);
    set.add(ch);
}

if(set.size === 26){
    console.log("Yes, it is panagram!")
}
else{
    console.log("No, it is not panagram!");
}