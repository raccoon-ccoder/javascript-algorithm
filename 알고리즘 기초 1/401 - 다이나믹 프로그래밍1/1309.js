// https://www.acmicpc.net/problem/110
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 184ms, 메모리 : 10656KB

// dp[1],dp[2], dp[3]의 값을 이용해 점화식을 찾았다
// dp[i] = dp[i - 2] + 2 * dp[i - 1]
const input = require("fs").readFileSync("./test.txt").toString().trim();
const n = Number(input);
function solution(n) {
  const dp = Array(n + 1).fill(0);
  dp[1] = 3;
  dp[2] = 7;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + 2 * dp[i - 1]) % 9901;
  }

  return dp[n];
}

console.log(solution(n));
