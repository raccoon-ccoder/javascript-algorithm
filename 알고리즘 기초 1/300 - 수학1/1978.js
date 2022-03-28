// https://www.acmicpc.net/problem/1978
// 시간 제한 : 2초, 메모리 제한 : 128MB
// 시간 : 120ms, 메모리 : 9336KB

// 각 숫자마다 소수인지 판별하는 solution 함수를 이용한다
// 소수인지는 해당 숫자의 √까지만 확인하면 된다
// 예를 들어 80의 약수는 [1, 2, 4, 5, 8, 10, 16, 20, 40, 80]이다
// √80의 값은 약 8.xx로 이 값이 약수들의 중간값이 되며 이 원리를 이용해
// 2부터 √N의 값까지만 검사한다면 이후의 값은 확인할 필요가 없어지며 시간복잡도는 O(√n)이 된다

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
[T, cases] = input;
const arr = cases.split(" ").map(Number);
const result = arr.filter(v => solution(v)).length;

function solution(num) {
    if(num == 1) return;
    for(let i = 2; i * i <= num; i++) {
        if(num % i === 0) {
            return;
        }
    }
    return true;
}

console.log(result);


