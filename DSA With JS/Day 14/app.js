let prompt = require("prompt-sync")() 

// // Traverse on the 2D array
// let arr = [[1,2,3],
//            [4,5,6],
//            [7,8,9]];

// for(let i=0; i<arr.length; i++){
//     for(j=0; j<arr[i].length; j++){
//         process.stdout.write(" "+arr[i][j])
//     }
//     console.log()
// }

// // Takning input from user
// let size = Number(prompt("Enter array size : "));
// let arr = new Array(size);

// for(let i=0; i<arr.length; i++){
//     let innerArrSize = Number(prompt("Enter inner array size : "));
//     arr[i] = new Array(innerArrSize);
// }

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         arr[i][j] = Number(prompt("Enter element : "));
//     }
// }
// console.log(arr);

// // Q. 57) Calculate diagonal sum of 2D-Array
// let size = Number(prompt("Enter array size : "));
// let arr = new Array(size);

// for(let i=0; i<arr.length; i++){
//     let innerArrSize = Number(prompt("Enter inner array size : "));
//     arr[i] = new Array(innerArrSize);
// }

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         arr[i][j] = Number(prompt("Enter elements : "));
//     }
// }

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// let leftSum = 0, rightSum = 0;
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         if(i==j){
//             leftSum = leftSum + arr[i][j];
//         }

//         if(i+j == arr.length-1){
//             rightSum = rightSum + arr[i][j];
//         }
//     }
// }

// console.log(`Leftsum : ${leftSum}`);
// console.log(`rightsum : ${rightSum}`);


// // Jagged Array
// let size = Number(prompt("Enter array size : "));
// let arr = new Array(size);

// for(let i=0; i<arr.length; i++){
//     let innerArrSize = Number(prompt("Enter inner array size : "));
//     arr[i] = new Array(innerArrSize);
// }

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         arr[i][j] = Number(prompt("Enter array element : "));
//     }
// }

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// Creation of 2D-array in single line
let arr = Array.from({length:3}, ()=> Array(4).fill(0));
console.log(arr);
