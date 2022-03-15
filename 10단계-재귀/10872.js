// https://www.acmicpc.net/problem/10872
// 정수 n (0<=n<=12)가 주어질 때, n!의 값을 출력
// 팩토리얼 : 1부터 n까지 자연수를 곱한 값 (다만 0!은 1)
// 따라서 재귀로 num이 1이 될때까지 재귀함수 호출하여 곱한 값을 반환
// n이 0인 경우는 1이므로 else if문으로 체크

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = Number(input);

function factorial(num) {
    if(num === 1) {
        return 1;
    }else if(num === 0) {
        return 1;
    }
   return num * factorial(num-1);   
}

console.log(factorial(n));