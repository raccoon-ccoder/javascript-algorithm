// https://www.acmicpc.net/problem/10824
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 124ms, 메모리 : 9596KB

// 두개의 수를 배열에 push 한 후 각 배열을 join 후 number 형태로 바꿔 합쳐진 수로 만든다
// 그 후 계산하여 return

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

function solution(arr) {
    const firstArr = [];
    const secondArr = [];

    firstArr.push(arr[0]);
    firstArr.push(arr[1]);
    secondArr.push(arr[2]);
    secondArr.push(arr[3]);
 
    const firstNum = Number(firstArr.join(""));
    const secondNum = Number(secondArr.join(""));

    return firstNum + secondNum;
}

console.log(solution(input));