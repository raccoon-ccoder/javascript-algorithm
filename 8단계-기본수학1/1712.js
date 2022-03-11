let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

// a : 고정비용, b : 가변 비용, c : 판매 가격
// 판매 개수를 x라 했을 때 손익분기점 구하는 식
// cx > bx + a => x > a / (c-b)
// (1) 만약 c-b <= 0 이면 손익분기점이 존재하지 않음
// (2) x는 자연수이므로 a / (c-b)의 값이 자연수라면 +1을 해줌
// (3) a / (c-b)의 값이 자연수가 아니라면(소수점이 있다면) 올림해서 값을 구함

let num;
const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

// (1)
if(c <= b) {
    num = -1;
}else { 
    const result = a / (c-b);
    if(result % 1 === 0) {  // (2)
        num = result + 1;
    }else {                 // (3)
        num = Math.ceil(result);
    }
}
console.log(num);