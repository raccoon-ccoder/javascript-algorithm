// https://www.acmicpc.net/problem/1929
// m 이상 m 이하의 소수를 모두 출력

// 방법 1. 해당 숫자의 √n까지 확인하는 방법 (시간복잡도 O(√N))
// 2부터 √n까지 값을 넣어 약수인지 아닌지 확인
// 참고로 1은 약수가 아니므로 제외 

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const m = Number(input[0]);
const n = Number(input[1]);


function isPrime(num) {
    if(num < 2) {
        return false;
    }
    for(let i=2;i*i<=num;i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

for(let i=m;i<=n;i++) {
    if(isPrime(i)) {
        console.log(i);
    }
}

// 방법 2. 에라토스테네스의 체 공식 이용
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const m = Number(input[0]);
const n = Number(input[1]);

let arr = Array(n+1).fill(true);    // 0부터 n까지 true인 배열
arr[0] = arr[1] = false;            // 0,1은 소수가 아니기에 false

for(let i = 2; i * i <= n; i++) {   // 2부터 n의 제곱근까지 반복
    if(arr[i]) {                    // 해당 값이 true면 소수이므로
        for(let j = i * i; j <= n; j += i) {    // 소수의 배수들은 소수가 아니므로 false
            arr[j] = false;
        }
    }
}

const result = [];

for(let i = m; i <= n; i++) {
    if(arr[i]) {    // 요소값이 true(소수)인것만 추출
        result.push(i);
    }
}

console.log(result.join('\n'));