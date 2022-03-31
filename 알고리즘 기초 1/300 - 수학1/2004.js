// https://www.acmicpc.net/problem/1676
// 시간 제한 : 2초, 메모리 제한 : 128MB
// 시간 : 168ms, 메모리 : 9348KB

// 이항 계수의 공식을 참고하여 결국엔 n!,(n-m)!,m!의 2와 5의 승수를 구한다
// 예를 들면, n! = 2의 승수 a1, 5의 승수 a2
// 예를 들면, n-m! = 2의 승수 b1, 5의 승수 b2
// 예를 들면, m! = 2의 승수 c1, 5의 승수 c2

// 2의 총 승수는 a1 - b1 - c1, 5의 승수는 a2 - b2 - c2가 되며 이 중 최솟값을 출력한다

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const n = Number(input[0]);
const m = Number(input[1]);

function solution(m, n) {
    const count2 = twoPower(n) - twoPower(n-m) - twoPower(m);
    const count5 = fivePower(n) - fivePower(n-m) - fivePower(m);

    return Math.min(count2, count5);
}

function twoPower(num) {
    let answer = 0;

    for(let i = 2; i <= num; i *= 2) {
        answer += Math.floor(num / i);
   }
   return answer;
}

function fivePower(num) {
    let answer = 0;

    for(let i = 5; i <= num; i *= 5) {
        answer += Math.floor(num / i);
   }
   return answer;
}

console.log(solution(m, n));