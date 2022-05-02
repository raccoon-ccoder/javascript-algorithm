// https://www.acmicpc.net/problem/2225
// 시간 제한 : 2초, 메모리 제한 : 128MB
// 시간 : 208ms, 메모리 : 9928KB

// 이번 문제는 N, K 두개의 입력변수가 주어지므로 2차원 행렬의 dp를 사용한다
// 모든 N에 대해 1개의 수의 합으로 표현하려면 N 자기자신 1번밖에 없다
// 여기서 N=5, K=2인 경우를 구하면 다음과 같다

// 5 = 5 + (N=0, K=1)
//   + 4 + (N=1, K=1)
//   + 3 + (N=2, K=1)
//   + 2 + (N=3, K=1)
//   + 1 + (N=4, K=1)
//   + 0 + (N=5, K=1)

// K\N	0	1	2	3	4	5…
// 0	0	0	0	0	0	0
// 1	1	1	1	1	1	1
// 2	1	2	3	4	5	6
// 3	1	.	.	.	.	.

// 그런데 2번째 줄까지 입력하면 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]의 합과 같다
// 따라서 위의 점화식을 활용해 문제를 푼다.

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const n = Number(input[0]);
const k = Number(input[1]);

function solution(n, k) {
  let dp = [];

  for (let i = 0; i <= k; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= n; i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= k; i++) {
    for (let j = 0; j <= n; j++) {
      if (j == 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000;
      }
    }
  }

  return dp[k][n];
}

console.log(solution(n, k));
