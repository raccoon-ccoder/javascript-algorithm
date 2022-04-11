// https://www.acmicpc.net/problem/16194
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 184ms, 메모리 : 9912KB

// 11052와 비슷한 문제지만 최솟값을 구해야 하기에
// dp[i] === 0 이라면 dp[i - j] + cards[j - 1] 점화식의 값을 넣어주고
// 0이 아니라면 비교하여 Math.min(dp[i], dp[i - j] + cards[j - 1]) 를 넣어준다

const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
[n, str] = input;
const cards = str.split(" ").map(Number);
const num = parseInt(n);

function solution(num, cards) {
    const dp = new Array(num + 1).fill(0);

    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= i; j++) {
            if(dp[i] === 0) {
                dp[i] = dp[i - j] + cards[j - 1];
            }else {
                dp[i] = Math.min(dp[i], dp[i - j] + cards[j - 1]);
            }
        }
    }
    return dp[num];
}


console.log(solution(num, cards));
