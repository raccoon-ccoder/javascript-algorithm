// https://www.acmicpc.net/problem/2193
// 시간 제한 : 2초, 메모리 제한 : 128MB
// 시간 : 124ms, 메모리 : 9344KB

// 숫자의 제일 앞자리 번호는 0이 될 수 없으며, 1의 숫자가 두번 연속하지 않는다.
// num은 숫자의 자리수를 의미한다

// num = 1 => 1
// num = 1 => 10
// num = 2 => 101, 100
// dp[num] = [마지막 숫자가 0인 숫자 개수, 마지막 숫자가 1인 숫자 개수]

// dp[3][0] = 3자리수이면서 마지막이 0인 숫자이므로 바로 직전의 숫자는 0, 1이 가능하다
// dp[3][0] = dp[2][0] + dp[2][1]

// dp[3][1] = 3자리수이면서 마지막이 1인 숫자이므로 바로 직전의 숫자는 0민 가능하다
// dp[3][1] = dp[2][0]

// 점화식
// dp[n] = [dp[n - 1][0] + dp[n - 1][1], dp[n- 1][0]]
// 값이 커지기에 BigInt로 숫자 개수를 담고서 출력시 String으로 바꿔준다.

const input = require("fs").readFileSync("./test.txt").toString().trim();
const num = parseInt(input);

function solution(num) {
    const dp = Array.from(new Array(num + 1), () => new Array(2));
    const mod = 1000000000;
    dp[1] = [0, 1];
    dp[2] = [1, 0];

    for(let i = 3; i <= num; i++) {
       dp[i] = [BigInt(dp[i - 1][0]) + BigInt(dp[i - 1][1]), BigInt(dp[i - 1][0])];
    }
    return (BigInt(dp[num][0]) + BigInt(dp[num][1])).toString();
}

console.log(solution(num));

