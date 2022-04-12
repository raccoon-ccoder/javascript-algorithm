// https://www.acmicpc.net/problem/1912
// 시간 제한 : 1초, 메모리 제한 : 128MB
// 시간 : 204ms, 메모리 : 15640KB

// 1. 직전까지의 부분합 + 현재 가리키는 수
// 2. 현재 가리키는 수
// 를 비교해 더 큰 값을 부분합으로 저장

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

function solution(n, arr) {
  const dp = new Array(n);
  dp[0] = arr[0];

  for (let i = 1; i < n; i++) {
    if (dp[i - 1] + arr[i] >= arr[i]) {
      dp[i] = dp[i - 1] + arr[i];
    } else {
      dp[i] = arr[i];
    }
  }
  return Math.max(...dp);
}

console.log(solution(n, arr));
