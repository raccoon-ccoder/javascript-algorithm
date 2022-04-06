// https://www.acmicpc.net/problem/1212
// 시간 제한 : 0.5초, 메모리 제한 : 512MB
// 시간 : 276ms, 메모리 : 18180KB

// 테스트 케이스 중 가장 큰수 + 1 크기인 배열로 만들어 에라토스테네스의 체를 이용해
// index가 소수면 true인 배열을 생성

// 각 테스트 케이스 수마다 반복문을 돌며 테스트 수 / 2까지 인덱스로 넣어 소수인지 그와 짝맞는 수도 소수인지 판별
// 각 테스트 케이스마다 정답은 배열에 넣어 한꺼번에 출력

let input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
input.shift();
const max = Math.max(...input);

function solution(arr) {
    const answer = [];
    const demical = Array(Number(max) + 1).fill(true);
    demical[0] = demical[1] = false;

    for(let i = 2; i < demical.length; i++) {
        if(demical[i] === true) {
            let idx = i + i;

            while(idx < demical.length) {
                demical[idx] = false;
                idx += i;
            }
        }
    }

    for(let val of arr) {
        let result = 0;
        const num = Number(val);

        for(let i = 2; i <= num / 2; i++) {
            if(demical[i] && demical[num - i]) {
                result++;
            }
        }
        answer.push(result);
    }
    return answer.join("\n");
}




console.log(solution(input));