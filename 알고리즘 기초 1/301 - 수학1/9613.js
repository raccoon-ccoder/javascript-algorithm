// https://www.acmicpc.net/problem/9613
// 시간 제한 : 1초, 메모리 제한 : 128MB
// 시간 : 188ms, 메모리 : 9728KB

// 각 테스트 케이스 배열의 쌍마다 최대공약수는 유클리드 호제법을 이용해 구했다
// 테스트 케이스마다 이중 반복문을 돌며 쌍의 수를 뽑아서 최대 공약수를 구한후 
// 각 테스트 케이스마다 가능한 모든 쌍의 최대 공약수를 더해 result 배열에 push 후
// 정답은 한꺼번에 출력하였다

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
[n, ...arr] = input;

function solution(arr) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        let answer = 0;

        let cases = arr[i].split(" ");
        cases.shift();
        cases = cases.map(Number).sort((a,b) => a - b);
   
        for(let j = 0; j < cases.length - 1; j++) {
            for(let k = j + 1; k < cases.length; k++) {
                answer += gcd(cases[k], cases[j]);
            }
        }
        result.push(answer);
    }
    return result.join("\n");
}

function gcd(a, b) {
    if(b === 0) {
        return a;
    }else {
        const c = a % b;
        return gcd(b ,c);
    }
}

console.log(solution(arr));