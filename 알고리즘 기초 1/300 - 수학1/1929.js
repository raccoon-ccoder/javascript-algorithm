// https://www.acmicpc.net/problem/1929
// 시간 제한 : 2초, 메모리 제한 : 256MB
// 시간 : 216ms, 메모리 : 24356KB

// 에라토스테네스의 체 방식을 이용했다.
// true로 채워진 n + 1만큼의 크기의 배열 생성후 숫자 0,1은 소수가 아니기에 false로 변경
// index 2부터 시작해 arr[index]가 true라면 소수기에 index 숫자의 배수인 index 요소들은 false로 변경

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');
const m = Number(input[0]);
const n = Number(input[1]);

function solution(a, b) {
    const arr = new Array(b + 1).fill(true);
    arr[0] = arr[1] = false;

    for(let i = 2; i < arr.length; i++) {
        if(arr[i] === true) {
            let idx = i + i;
            while(idx <= arr.length - 1) {
                arr[idx] = false;
                idx += i;
            }
        }
    }
    const result = [];
    for(let i = a; i <= b; i++) {
        if(arr[i] === true) {
            result.push(i);
        }
    }
    return result.join("\n");
}

console.log(solution(m, n));