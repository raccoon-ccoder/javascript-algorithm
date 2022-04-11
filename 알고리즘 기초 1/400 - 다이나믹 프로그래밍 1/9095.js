// https://www.acmicpc.net/problem/9095
// 시간 제한 : 1초, 메모리 제한 : 512MB
// 시간 : 120ms, 메모리 : 9328KB

const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
[t, ...cases] = input;

function solution(num) {
    const memo = {
        1:1,
        2:2,
        3:4
    };

    for(let i = 4; i <= num; i++) {
        memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
    }
    return memo[num];
}

const result = [];

for(let val of cases) {
    result.push(solution(Number(val)));
}

console.log(result.join("\n"));
