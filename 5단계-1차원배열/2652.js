let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let maxNum = Number(input[0]);
let maxIndex = 0;

for(let i = 1;i < input.length;i++){
    if(Number(input[i] > maxNum)){
        maxNum = Number(input[i]);
        maxIndex = i;
    }
}

console.log(maxNum + '\n' + (maxIndex+1));