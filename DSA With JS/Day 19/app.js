// // Q. 70) Jewels and stones 
// let jewels = "aA";
// let stones = "aAAbbbb";
// let count = 0;

// let set = new Set();
// for(let i=0; i<jewels.length; i++){
//     let ch = jewels.charAt(i);
//     set.add(ch);
// }

// for(let i=0; i<stones.length; i++){
//     let ch = stones.charAt(i);
//     if(set.has(ch)){
//         count++;
//     }
// }
// console.log(count);


// // Q. 71) Happy number 
// let n = 19;
// let set = new Set();

// while(true){
//     let sum = 0;
//     while(n>0){
//         let rem = n%10;
//         sum = sum + (rem*rem);
//         n = Math.floor(n/10);
//     }

//     if(sum == 1){
//         console.log("Happy number");
//         break;
//     }
//     else if(set.has(sum)){
//         console.log("not happy number");
//         break;
//     }
//     else{
//         set.add(sum);
//     }
//     n = sum;
// }


// //  Map
// let map = new Map();
// map.set("name", "Atish");
// map.set("age", 25);
// map.set("isFail", "false");

// console.log(map);

// map.delete("isFail");
// console.log(map);

// console.log(map.has("grade"));

// console.log(map.size);

// console.log(map.get("name"));

// map.clear()
// console.log(map)


// // Q. 72) Frequency of a number 
// let arr = [1,10,2,4,2,2,2,6,1,1,10];
// let map = new Map();

// for(let i=0; i<arr.length; i++){
//     if(map.has(arr[i])){
//         map.set(arr[i], map.get(arr[i])+1);
//     }
//     else{
//         map.set(arr[i], 1);
//     }
// }

// console.log(map);


// frequncy of a character in string 
let s = "malyalam";
let map = new Map();

for(let i=0; i<s.length; i++){
    let ch = s.charAt(i);
    if(map.has(ch)){
        map.set(ch, map.get(ch)+1);
    }
    else{
        map.set(ch, 1);
    }
}
console.log(map);
