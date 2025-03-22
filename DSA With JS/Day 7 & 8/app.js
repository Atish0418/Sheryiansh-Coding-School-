const prompt = require("prompt-sync")()

// Nested Loops => Pattern Programming
let n = Number(prompt("Enter a number : "));

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// let temp = 10;
// for(let i=1; i<=5; i++){
    
//     console.log(temp);
//     temp++;
// }


// Q. 35) Right angle triangle
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// // Q. 36) 1 
//           1 2 
//           1 2 3 
//           1 2 3 4 
//           1 2 3 4 5 
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(j+" ");
//     }
//     console.log();
// }

// // Q. 37) A
//           A B 
//           A B C
//           A B C D
//           A B C D E 
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(String.fromCharCode(64 + j)+ " ");
//     }
//     console.log();
// }

// Q. 38) Inverted right angled triangle
// Bruteforce approach
// let temp = n;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=temp; j++){
//         process.stdout.write("* ");
//     }
//     temp--;
//     console.log();
// }

//  Another approach
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// Q. 39) Mirror right angle triangle
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-i; j++){
//         process.stdout.write("  ");
// }
//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// Q. 40) Triangle pattern
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-i; j++){
//         process.stdout.write(" ");
//     }
//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// Q. 41) Printing 'X' pattern
// for(let i=1; i<=n; i++){
//     for(j=1; j<=n; j++){
//         if(i==j || i+j==n+1){
//             process.stdout.write("* ");
//         }
//         else{
//             process.stdout.write("  ") ;
//         }
//     }
//     console.log();
// }

// Q. 42) Printing 'V' pattern
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n*2-1; j++){
//         if(i==j || i+j == n*2){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
// }

