// https://www.acmicpc.net/problem/17404
// 시간 제한 : 0.5초, 메모리 제한 : 128MB
// 시간 : 128ms, 메모리 : 9736KB

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
const arr = input.map((v) => v.split(" ").map((v) => Number(v)));

function solution(n, arr) {
  const dp = Array.from(Array(n), () => new Array(3));
  let result = 1000 * 1000 + 1;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) {
        dp[0][j] = arr[0][i];
      } else {
        dp[0][j] = 1000 * 1000 + 1;
      }
    }

    for (let j = 1; j < n; j++) {
      dp[j][0] = Math.min(dp[j - 1][1], dp[j - 1][2]) + arr[j][0];
      dp[j][1] = Math.min(dp[j - 1][0], dp[j - 1][2]) + arr[j][1];
      dp[j][2] = Math.min(dp[j - 1][0], dp[j - 1][1]) + arr[j][2];
    }

    for (let j = 0; j < 3; j++) {
      if (i === j) continue;
      result = Math.min(result, dp[n - 1][j]);
    }
  }

  return result;
}

console.log(solution(n, arr));
