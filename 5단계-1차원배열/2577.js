let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let arr = [0,0,0,0,0,0,0,0,0,0];

let result = a*b*c;

// 숫자 타입은 string으로 형변환 후 길이를 측정할 수 있음
// number type.length -> undefined
for(let i = 0;i < result.toString().length;i++){
    let num = Number(result.toString().substring(i,i+1));
    arr[num]++;
}

for(let i = 0;i < arr.length;i++){
    console.log(arr[i]);
}