// https://www.acmicpc.net/problem/10430
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 120ms, 메모리 : 9580KB

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

function solution(arr) {
    const a = Number(arr[0]);
    const b = Number(arr[1]);
    const c = Number(arr[2]);

    const first = (a + b) % c;
    const second = ((a % c) + (b % c)) % c;
    const third = (a * b) % c;
    const fourth = ((a % c) * (b % c)) % c;

    return first + "\n" + second + "\n" + third + "\n" + fourth; 
}

console.log(solution(input));