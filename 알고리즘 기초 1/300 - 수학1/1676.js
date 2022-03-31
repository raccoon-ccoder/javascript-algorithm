// https://www.acmicpc.net/problem/1676
// 시간 제한 : 2초, 메모리 제한 : 128MB
// 시간 : 128ms, 메모리 : 9348KB

// N 팩토리얼의 결과값 끝에 붙은 0의 갯수를 알기 위해선 2,5의 개수를 알면 된다
// 5가 1개 나올땐, 2도 1개 이상 나온다
// 5의 개수를 알면 0의 개수도 알 수 있다
// 5 배수만큼 커지도록 반복문을 돌려 5의 개수를 더한다

const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input);

function solution(num) {
    let answer = 0;
   for(let i = 5; i <= num; i*= 5) {
        answer += Math.floor(num / i);
   }
   return answer;
}


console.log(solution(num));