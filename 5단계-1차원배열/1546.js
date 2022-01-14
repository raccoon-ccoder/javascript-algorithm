let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(' ');
let maxScore = Number(arr[0]);
let totalScore = 0;

for(let i = 1;i < arr.length;i++){
    if(Number(arr[i]) > maxScore){
        maxScore = Number(arr[i]);
    }
}

for(let i = 0;i < arr.length;i++){
    totalScore += (Number(arr[i]) / maxScore * 100);
}

console.log(totalScore / arr.length);