// https://www.acmicpc.net/problem/2133
// 시간 제한 : 2초, 메모리 제한 : 128MB
// 시간 : 124ms, 메모리 : 9332KB

// n이 홀수인 경우 경우의 수는 존재하지 않는다
// n >= 4부터는 2 * 2 외에도 특이한 형태가 존재한다
// dp[4] = dp[2] * dp[2] + 2
// dp[6] = dp[4] * dp[2] + dp[2] * 2 + 2
// 여기서 dp[2] * 2는 dp[2] * dp[4]의 특별한 바리에이션(2)다.
// 마지막 + 2는 딱 나눠지지 않는 이어지는 타일로 2가지의 경우가 존재한다

// dp[8] = dp[6] * dp[2] + dp[4] * 2 + dp[2] * 2 + 2
const input = require("fs").readFileSync("./test.txt").toString().trim();
const n = Number(input);
function solution(n) {
  const dp = Array(n + 1).fill(0);
  dp[2] = 3;

  for (let i = 4; i <= n; i += 2) {
    dp[i] = dp[i - 2] * dp[2] + 2;

    for (let j = 4; j < i; j += 2) {
      dp[i] += dp[i - j] * 2;
    }
  }

  return dp[n];
}

console.log(solution(n));
