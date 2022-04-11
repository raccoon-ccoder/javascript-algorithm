// https://www.acmicpc.net/problem/11052
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 188ms, 메모리 : 9660KB

// 만약 카드 i개를 구매할 때 방법은 다음과 같다
// 카드 1개 들어있는 팩 구매, 카드 i - 1개 구입
// 카드 2개 들어있는 팩 구매, 카드 i - 2개 구입
// 카드 3개 들어있는 팩 구매, 카드 i - 3개 구입
// ...

// 점화식 : dp[i] = cards[n] + dp[i - n];

const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
[n, str] = input;
const cards = str.split(" ").map(Number);
const num = parseInt(n);

function solution(num, cards) {
    const dp = new Array(num + 1).fill(0);

    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= i; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
        }
    }
    return dp[num];
}


console.log(solution(num, cards));
