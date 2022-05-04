// https://www.acmicpc.net/problem/11055
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 184ms, 메모리 : 9908KB

// dp[i] - i번째까지 수에서 가장 큰 증가하는 부분수열 합
// i는 0부터 n - 1까지 순회, 매순간 j는 0부터 i - 1까지 순회
// dp 초기 상테는 주어진 숫자들의 배열

// i번째 수와 j번째 수를 비교해 증가하는 부분 수열인지 & dp[j] + i번째 수 > dp[i]인지 판단
// dp에서 가장 큰 값

const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ").map((v) => Number(v));
const n = Number(input[0]);

function solution(arr, n) {
  const dp = [];

  for (let i = 0; i < n; i++) {
    dp[i] = arr[i];

    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[i] < dp[j] + arr[i]) {
        dp[i] = dp[j] + arr[i];
      }
    }
  }
  return Math.max(...dp);
}

console.log(solution(arr, n));
