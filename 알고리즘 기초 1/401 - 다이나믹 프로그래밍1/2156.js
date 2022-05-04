// https://www.acmicpc.net/problem/2156
// 시간 제한 : 2초, 메모리 제한 : 128MB
// 시간 : 176ms, 메모리 : 10132KB

// dp[n]은 포도주의 개수가 n개일때 최댓값이 저장된다
// dp[1] = arr[1] (포도주가 1개밖에 없기에 무조건 마신다)
// dp[2] = arr[1] + arr[2] (포도주가 2개밖에 없기에 2개 다 마셔야 최댓값)
// dp[3] = (arr[1] + arr[2], arr[1] + arr[3], arr[2] + arr[3]) 3가지의 경우로 나뉜다
// 여기서 가장 큰 값이 최댓값이 된다 (연속해서 3잔 마시는 것은 불가)

// dp[n]은 3가지 경우로 나눌 수 있다
// 1.n번째 잔을 마셨을 경우
// 1) n - 1번째 잔을 마심 - dp[n] = dp[n - 3] + arr[n - 1] + arr[n]
// 2) n - 1번째 잔을 안 마심 - dp[n] = dp[n - 2] + arr[n]
// 2. n번째 잔을 안마셨을 경우 (무조건 n - 1번째 잔을 마심) -> dp[n] = dp[n - 1]

// 위 3가지 경우 중 최댓값이 dp[n]이 된다

const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input.map((v) => Number(v));
const n = arr[0];

function solution(arr, n) {
  const dp = Array(n + 1);
  dp[1] = arr[1];
  dp[2] = arr[1] + arr[2];
  dp[3] = Math.max(arr[1] + arr[2], arr[2] + arr[3], arr[1] + arr[3]);

  for (let i = 4; i <= n; i++) {
    dp[i] = Math.max(
      dp[i - 3] + arr[i - 1] + arr[i],
      dp[i - 2] + arr[i],
      dp[i - 1]
    );
  }

  return dp[n];
}

console.log(solution(arr, n));
