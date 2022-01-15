let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let arr = [];

for(let i=97;i<123;i++){
    arr.push(String.fromCharCode(i));
}

let answer = "";

for(let i=0;i<arr.length;i++){
    if(input.indexOf(arr[i]) != -1){
        answer += input.indexOf(arr[i]) + ' ';
    }else {
        answer += -1 + ' ';
    }
}

console.log(answer);