// https://www.acmicpc.net/problem/1541
// 식이 있을 때 -로 자른 배열을 만든다
// 배열 각 요소는 +식이거나 숫자로만 이뤄져 있으므로 계산해준다
// 계산 후 그 값들을 차례대로 빼준다

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('-');

let result;
for(let i=0;i<input.length;i++) {
    let sum = 0;
    let exp = input[i].split("+");

    for(let i=0;i<exp.length;i++) {
        sum += Number(exp[i]);
    }

    if(result === undefined) {
        result = sum;
    }else {
        result -= sum;
    }
 
}

console.log(result);

