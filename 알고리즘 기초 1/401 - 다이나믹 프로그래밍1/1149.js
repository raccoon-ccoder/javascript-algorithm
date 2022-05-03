// https://www.acmicpc.net/problem/1149
// 시간 제한 : 0.5초, 메모리 제한 : 128MB
// 시간 : 164ms, 메모리 : 9608KB

// 첫번째집은 R로 칠한 경우, G로 칠한 경우, B로 칠한 경우 모두 다 따져주면 된다
// 또한 바로 인접한 집끼리는 색이 겹치면 안되므로 점화식은 다음과 같다

// input[i][0] = min(input[i-1][1], input[i-1][2]) + input[i][0]
// input[i][1] = min(input[i-1][0], input[i-1][2]) + input[i][1]
// input[i][2] = min(input[i-1][0], input[i-1][1]) + input[i][2]

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = input.shift();
const arr = input.map((v) => v.split(" ").map((v) => Number(v)));

function solution(arr, n) {
  for (let i = 1; i < n; i++) {
    arr[i][0] = Math.min(arr[i - 1][1], arr[i - 1][2]) + arr[i][0];
    arr[i][1] = Math.min(arr[i - 1][0], arr[i - 1][2]) + arr[i][1];
    arr[i][2] = Math.min(arr[i - 1][0], arr[i - 1][1]) + arr[i][2];
  }
  return Math.min(...arr[n - 1]);
}

console.log(solution(arr, n));
