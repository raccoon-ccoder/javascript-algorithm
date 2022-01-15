let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let numCount = Number(input[0]);
let num = input[1];
let result = 0;

for(let i=0;i<numCount;i++){
    result += Number(num.charAt(i));
}

console.log(result);

