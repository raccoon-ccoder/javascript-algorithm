// https://www.acmicpc.net/problem/10872
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 116ms, 메모리 : 9604KB

// 숫자 num의 팩토리얼을 출력해야 한다
// 0!은 1이므로 if else로 분리
// 반복문을 돌며 1부터 num까지 계속 곱하여 결과값을 반환한다.

const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input);

function solution(num) {
    if(num === 0) {
        return 1;
    }else {
        let result = 1;

        for(let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}

console.log(solution(num));