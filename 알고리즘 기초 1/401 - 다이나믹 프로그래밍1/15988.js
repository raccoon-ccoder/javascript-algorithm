// https://www.acmicpc.net/problem/15988
// 시간 제한 : 1초, 메모리 제한 : 512MB
// 시간 : 300ms, 메모리 : 43696KB

// dp[i] = 정수 i를 1,2,3으로 나타내는 방법의 수
// dp[1] = 1, dp[2] = 2, dp[3] = 4가 된다
// dp[4]를 생각해보면 (dp[1] + 숫자 3), (dp[2] + 2), (dp[3] + 1)이 된다
// 점화식 : dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
const arr = input.map((v) => Number(v));

function solution(arr) {
  const max = Math.max(...arr);
  const result = [];
  const dp = { 1: 1, 2: 2, 3: 4 };

  for (let i = 4; i <= max; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
  }

  for (let i = 0; i < arr.length; i++) {
    result.push(dp[arr[i]]);
  }

  return result.join("\n");
}

console.log(solution(arr));
