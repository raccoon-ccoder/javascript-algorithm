// https://www.acmicpc.net/problem/2231
// 자연수 n의 분해합 = n + n을 이루는 각 자리수의 합
// m의 분해합이 n인 경우, m은 n의 생성자
// 자연수 n의 가장 작은 생성자 출력 (생성자가 없을 경우 0을 출력)

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

// 분해합 구하는 함수
function decompose(num) {
    const arr = num.toString().split('');
    return num + arr.reduce((acc,num) => (acc += parseInt(num)), 0);
}

let result = 0;

// 1부터 n-1까지 분해합 함수에 대입하여 반환값이 n과 같다면 그것이 답이다
for(let i=1;i<n;i++) {
    if(decompose(i) === n) {
        result = i;
        break;
    }
}

console.log(result);
