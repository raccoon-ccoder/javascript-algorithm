// https://www.acmicpc.net/problem/16194
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 400ms, 메모리 : 29704KB

// dp[i] = [마지막 수가 1인 숫자 개수, 마지막 수가 2인 숫자 개수, 마지막 수가 3인 숫자 개수]
// 마지막 자리의 수가 연속된 값이 되면 안되기에 숫자별로 마지막 수가 1,2,3 별로 몇개가 있는지 담아준다.


const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
[n, ...str] = input;
const nums = str.map(Number);
const max = Math.max(...nums);

function solution(max, nums) {
    const dp = [[0,0,0], [1,0,0], [0,1,0], [1,1,1]];
    const mod = 1000000009;

    for(let i = 4; i <= max; i++) {
        dp[i] = [
            (dp[i - 1][1] + dp[i -1][2]) % mod, 
            (dp[i - 2][0] + dp[i -2][2]) % mod,
            (dp[i - 3][0] + dp[i -3][1]) % mod
        ];
    }

    for(let i = 0; i < nums.length; i++) {
       
        console.log(dp[nums[i]].reduce((a, v) => a + v) % mod);
    }
}

solution(max,nums);

