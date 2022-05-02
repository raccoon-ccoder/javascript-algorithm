// https://www.acmicpc.net/problem/1699
// 시간 제한 : 2초, 메모리 제한 : 128MB
// 시간 : 392ms, 메모리 : 10468KB

// 처음엔 num보다 작은 최대 제곱수부터 빼가면서 dp를 완성했지만 틀렸다
// 반례 : 43 => 내 방식대로 풀면 5가 나오지만
// 43 = 5*5 + 3*3 + 3*3 으로 최솟값은 3이 나온다

// 무조건 가능한 최대 제곱수를 빼는 것이 아닌, N보다 작은 제곱수들을 뺀 결과들 중 최솟값을 골라야 한다
// ex : 43 = min(dp(43-6^2), dp(43-5^2), dp(43-4^2), dp(43-3^2), dp(43-2^2), dp(43-1^2))

const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input);
const dp = Array.from({ length: num + 1 }, (v, i) => i);

function solution(dp, num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j < i; j++) {
      // 2*2 < 3 거짓이므로 이전 제곱수의 값을 사용할 수 없음
      if (Math.pow(j, 2) > i) {
        break;
      }

      dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1);
    }
  }
  return dp[num];
}

console.log(solution(dp, num));
