// Q. 73) Two sum 
let arr = [2,7,11,15];
let target = 9;

let map = new Map();
let ans = [-1,-1];

for(let i=0; i<arr.length; i++){
    if(map.has(target-arr[i])){
        ans[0] = map.get(target - arr[i]);
        ans[1] = i;
        console.log(ans);
        break;
    }
    else{
        map.set(arr[i], i);
    }
}