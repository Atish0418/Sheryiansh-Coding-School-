// Do-While Loop
// 1) Repeat Hello
// let userInput;
// do{
//     console.log("Hello World");
//     userInput = prompt("Do you want to continue ? yes/no").toLowerCase();
// }while(userInput === 'yes');

// 2) Guess the number
// let comp = Math.floor(Math.random()*100)+1;

// let userInput;
// do{
//     userInput = Number(prompt("Guess the number between 1 to 100"));
//     if(isNaN(userInput) || userInput<0 || userInput>100){
//         console.log("Please enter a valid number!!");
//         continue;
//     }

//     if(userInput>comp){
//         console.log("too high, try again!!!");
//     }
//     else if(userInput<comp){
//         console.log("too low, try again");
//     }
//     else{
//        console.log(" Congrats 🎉 and number was "+comp);
//     }
// }while(userInput !== comp);

// 3) sasta Calculator
// let  userInput;
// do{
//     let num1 = Number(prompt("Enter first number"));
//     let num2 = Number(prompt("Enter second number"));
//     let operator = prompt("Enter valid operator (+, -, *, /)");

//     switch(operator){
//         case '+':
//             console.log("Result : " +(num1+num2));
//         break;

//         case '-':
//             console.log("Result : " +(num1-num2));
//         break;

//         case '*':
//             console.log("Result : " +(num1*num2));
//         break;

//         case '/':
//             if(num2 !== 0){
//                 console.log("Result : " +(num1/num2));
//             }
//             else{
//                 console.log("Please enter valid number!!!");
//             }
//         break;

//         default:
//             console.log("Please enter valid operator!!!");
//     }
//      userInput = prompt("Do you want to continue? yes/no").toLowerCase();
// }while(userInput === 'yes');


const menu = [
    { id: 1, name: "🍕 Pizza", price: 8.99 },
    { id: 2, name: "🍔 Burger", price: 5.99 },
    { id: 3, name: "🍣 Sushi", price: 12.99 },
    { id: 4, name: "🥤 Soft Drink", price: 2.50 }
];

let order = [];
let total = 0;

// **1st Loop:** Display the Menu
console.log("Welcome to the Restaurant!");
console.log("----- Menu -----");
for (let i = 0; i < menu.length; i++) {
    console.log(`${menu[i].id}. ${menu[i].name} - $${menu[i].price.toFixed()}`);
}

let userInput;

// **2nd Loop:** Take user input and add to order
do {
    userInput = prompt("Enter item number to order or type 'done' to finish:");

    if (userInput === "done") {
        break;
    }

    userInput = parseInt(userInput);
    
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].id === userInput) {
            order.push(menu[i]);
            total += menu[i].price;
            console.log(`${menu[i].name} added to your order.`);
            break; // Exit loop after finding the item
        }
    }

} while (true);

// **3rd Loop:** Display the final order
if (order.length > 0) {
    console.log("----- Your Order -----");
    for (let i = 0; i < order.length; i++) {
        console.log(`${order[i].name} - $${order[i].price.toFixed(2)}`);
    }
    console.log(`Total: $${total.toFixed(2)}`);
    console.log("Thank you for your order! 🍽️");
} else {
    console.log("You didn't order anything.");
}
