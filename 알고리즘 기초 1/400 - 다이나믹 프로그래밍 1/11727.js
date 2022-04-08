// https://www.acmicpc.net/problem/11727
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 200ms, 메모리 : 9660KB

// 11726 문제와 거의 동일하지만 규칙을 찾아보면
// 2X1 타일 2개를 합치면 2X2 타일이고
// 1x2 타일 2개를 합치면 마찬가지로 2X2 타일이 된다
// 따라서 memo[n-2]에다가 2를 곱했다

const input = require("fs").readFileSync("/dev/stdint").toString().trim();
const num = Number(input);

function solution(num) {
    const memo = {
        1:1,
        2:3
    };
    for(let i = 3; i <= num; i++) {
        memo[i] = (memo[i - 1] + 2 * memo[i - 2] ) % 10007;
    }
    return memo[num];
}

console.log(solution(num));
