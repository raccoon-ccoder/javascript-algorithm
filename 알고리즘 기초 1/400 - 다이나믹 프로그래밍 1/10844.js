// https://www.acmicpc.net/problem/10844
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 128ms, 메모리 : 9592KB

// 0으로 시작하는 수는 없기 때문에 num = 1인 경우 계단수는 9개
// num = 2인 경우 계단수는 17개
// dp[num] = 마지막 수가 0~9인 숫자 개수 배열

// 만약 num = 3일 경우 dp[3][0] = 자리수가 3이면서 0으로 끝나는 수다
// 따라서 0으로 끝나려면 바로 직전의 수는 1밖에 올 수 없기에 dp[2][1]의 개수

// dp[3][9] = 자리수가 3이면서 9로 끝나는 수기에 바로 직전의 수는 8밖에 올 수 없다
// 따라서 dp[3][9] = dp[2][8] (자리수가 2이면서 8로 끝나는 수)

// 점화식은 다음과 같다 (num은 3부터 시작)
// 1) i = 0인경우
// dp[n][i] = dp[n - 1][i + 1]

// 2) i = 9
// dp[n][i] = dp[n - 1][i - 1]

// 3) 1 <= i <= 8
// dp[n][i] = dp[n - 1][i - 1] + dp[n - 1][i + 1]
 
const input = require("fs").readFileSync("./test.txt").toString().trim();
const num = parseInt(input);

function solution(num) {
    const dp = Array.from(new Array(num + 1), () => new Array(10));
    const mod = 1000000000;
    dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

    for(let i = 3; i <= num; i++) {
        for(let j = 0; j <= 9; j++) {
            if(j === 0) {
                dp[i][j] = dp[i - 1][j + 1] % mod;
            }else if(j === 9) {
                dp[i][j] = dp[i - 1][j - 1] % mod;
            }else {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1] % mod;
            }
        }
    }
    return dp[num].reduce((prev, curr) => prev + curr) % mod;
}

console.log(solution(num));

