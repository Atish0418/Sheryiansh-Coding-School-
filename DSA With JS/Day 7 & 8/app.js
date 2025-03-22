const prompt = require("prompt-sync")()
// let n = Number(prompt("Enter a number : "));
// Strong number => 145 => 1! + 4! + 5! = 1 + 24 + 120 = 145

// let copy = n;
// let ans = 0;
// while(n>0){
//     let dig = n%10;
//     let fact = 1;
//     for(let i=1; i<=dig; i++){
//         fact = fact * i;
//     }
//     ans = ans + fact;
//     n = Math.floor(n/10);
// }
// if(copy == ans){
//     console.log("Strong number");
// }
// else{
//     console.log("Not a strong number");
// }


// Q. 43) Sum of array's element.
// let n = Number(prompt("Enter array's size : "));
// let arr = new Array(n);
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     arr[i] = Number(prompt("Enter element : "));
//     sum = sum + arr[i];
// }
// console.log("sum : "+sum);


// Q. 44) Max element from array
// for(let i=0; i<arr.length; i++){
   
//     arr[i] = Number(prompt("Enter element : "));
// }

// let max = arr[0];

// for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
   
// }
// console.log("Max element is "+max);

// 45) Minimum element from array
// for(let i=0; i<arr.length; i++){
   
//     arr[i] = Number(prompt("Enter element : "));
// }

// let min = arr[0];

// for(let i=0; i<arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i];
//     }
   
// }
// console.log("Minimum element is "+min);

// Q. 46) Find second max element
// let arr = [28, 6, 74, 48, 84, 79, 84];
// let max = Math.max(arr[0], arr[1]);
// let sMax = Math.min(arr[0], arr[1]); // second max

// for(let i=2; i<arr.length; i++){
//     if(arr[i] > max && arr[i] != max){
//         sMax = max;
//         max = arr[i];
//     }
//     else if(arr[i] > sMax){
//         sMax = arr[i];
//     }
// }
// console.log("Second max : "+sMax);

// Second minimum
// let arr = [28, 6, 74, 48, 84, 79, 84];
// let min = Infinity;
// let sMin = Infinity;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] < min){
//         sMin = min;
//         min = arr[i];
//     }
//     else if(arr[i] > min &&  arr[i] < sMin){
//         sMin = arr[i];
//     }
// }
// console.log("second minimum is "+sMin);

// Q. 47) Reverse the array => two pointer algorithm
// let arr = [1,2,3,4,5,6];
// let i = 0, j=arr.length-1;

// while(i<j){
//     let temp = arr[i]
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log("Reversed array : "+arr);

// Q. 48) All zero's to left and all one's to right
// let arr = [1,1,0,1,0,1,1,0,0];
// let i=0, j=0;
// while(i<arr.length){
//     if(arr[i] == 0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr);

// Q. 49) Array left rotation by one(1)
// let arr = [1,2,3,4,5];
// let temp = arr[0];
// for(let i=0; i<arr.length-1; i++){
//     arr[i] = arr[i+1];
// }

// arr[arr.length - 1] = temp;

// process.stdout.write("Array left shift by 1 : ")
// console.log(arr);

// Q. 50) Array right rotation by 1
let arr = [1,2,3,4,5];
let temp = arr[arr.length-1];
for(let i=arr.length-1; i>0; i--){
    arr[i] = arr[i-1];
}

arr[0] = temp;

process.stdout.write("Array right shift by 1 : ");
console.log(arr);

