// https://www.acmicpc.net/problem/2869
// 높이 v, 낮에는 +a 밤에는 -b만큼 움직이며 x는 일수
// 1일엔 a미터, 2일은 2a-b, 3일은 3a-2b... x일은 ax-(x-1)b 만큼 움직임
// v = (a-b)x + b => x = (v-b) / (a-b)
// 일수는 자연수이므로 반올림을 한다

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const v = Number(input[2]);

const x = Math.ceil((v-b)/(a-b));

console.log(x);