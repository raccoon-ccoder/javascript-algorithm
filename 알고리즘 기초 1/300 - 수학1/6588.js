// https://www.acmicpc.net/problem/6588
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 348ms, 메모리 : 30484KB

// 각 테스트 케이스 숫자(a)마다 반복문을 돌려 첫번째 숫자는 홀수 소수인 3으로 시작하며 
// a - i가 소수인지 판별하는 isDemical 함수를 사용한다
// 3은 소수지만 isDemical 함수에는 false로 나오기에 if else문으로 i가 3인지 아닌지에 대해 분리
// 만약 a를 만들 수 있는 홀수 소수의 합이 많다면 홀수 소수의 차가 가장 큰 것을 출력해야 하기에 for문을 돌면서
// 첫번째로 홀수 소수의 합이 나오면 바로 return

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
[...cases] = input;
cases = cases.map(Number);

function solution(a) {

    for(let i = 3; i < a; i += 2) {
        if(i === 3) {
            const num = a - i;
 
            if(isDemical(num) === true) {
                return `${a} = ${i} + ${num}`;
            }
        }else {
            if(isDemical(i) === true) {
                const num = a - i;
    
                if(isDemical(num) === true) {
                    return `${a} = ${i} + ${num}`;
                }
            }
        }
    }
    return `${a} = Goldbach's conjecture is wrong.`;
}

function isDemical(num) {
    for(let i = 2; i * i <= num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

const result = [];

for(let i = 0; i < cases.length - 1; i++) {
    result.push(solution(cases[i]));
}

console.log(result.join("\n"));


