// https://www.acmicpc.net/problem/1934
// 시간 제한 : 1초, 메모리 제한 : 128MB
// 시간 : 116ms, 메모리 : 10108KB

// 각 케이스마다 유클리드 호제법을 이용해 최대 공약수를 구한 후 그 값을 이용해 최소공배수를 구한다
// 각 케이스마다 최소 공배수를 배열에 넣어 정답은 한꺼번에 출력한다

const input = require("fs").readFileSync("./test.txt").toString().trim().split('\n');
[T, ...cases] = input;
const result = [];

for(let i = 0; i < cases.length; i++) {
    const a = Number(cases[i].split(" ")[0]);
    const b = Number(cases[i].split(" ")[1]);

    result.push(solution(a, b));
}

function solution(a, b) {

    function gcd(a ,b) {
        if(b === 0) {
            return a;
        } else {
            const c = a % b;
            return gcd(b , c);
        }
    }
    
    const gcf = gcd(a, b);
    const lcm = (a / gcf) * (b / gcf) * gcf;
    return lcm;
}

console.log(result.join("\n"));
