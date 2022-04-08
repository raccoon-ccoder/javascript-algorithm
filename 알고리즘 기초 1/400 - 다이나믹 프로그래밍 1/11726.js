// https://www.acmicpc.net/problem/11726
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 212ms, 메모리 : 9648KB

// n : 1 -> 2X1 타일 1개 => 1개 방법
// n : 2 -> 1X2 타일 2개, 2X1 타일 2개 => 2개 방법
// 2X3부터는 다음과 같은 패턴이다
// memo[i] = memo[i-1] + memo[i-2]
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input);

function solution(num) {
    const memo = {
        1:1,
        2:2
    };
    for(let i = 3; i <= num; i++) {
        memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
    }
    return memo[num];
}

console.log(solution(num));