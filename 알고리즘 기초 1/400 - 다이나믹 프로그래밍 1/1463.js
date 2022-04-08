// https://www.acmicpc.net/problem/1212
// 시간 제한 : 0.15초, 메모리 제한 : 128MB
// 시간 : 196ms, 메모리 : 17432KB

// 각 인덱스의 최솟값을 담은 배열을 dp라고 했을 때
// 1을 뺀 경우 - dp[n] + 1
// n % 2 === 0인 경우 - dp[n/2 == 0] + 1
// n % 3 === 0인 경우 - dp[n/3 == 0] + 1
// 횟수를 계산해야 하기에 1을 더한다. 각 케이스의 값을 비교해 최소값을 찾아서 dp[n] 배열에 넣어준다

const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input);

function solution(num) {
    const dp = Array(num + 1).fill(0);

    for(let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + 1;

        if(i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
        if(i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }
    }
    return dp[num];
}

console.log(solution(num));
