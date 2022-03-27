// https://www.acmicpc.net/problem/17299
// 시간 제한 : 1초, 메모리 제한 : 512MB
// 시간 : 944ms, 메모리 : 229348KB

// 17298 오큰수와 비슷한 문제지만 비교 대상이 해당 값이 아닌 해당 값이 배열에 나온 횟수다
// 또한 출력해야 하는 값은 오른쪽에 있으면서 등잔한 횟수가 더 큰 숫자 중 가장 왼쪽에 있는 수디
// 즉, 배열에 나온 횟수가 아닌 원래 배열의 값을 출력해야 한다

// 따라서 arr 배열의 원소가 몇번 나왔는지는 카운팅 정렬을 이용해 newArr 배열을 생성
// 비교하며 stack 가장 위에 있는 원소 (나온 횟수)보다 현재 배열의 원소가 크다면 
// result 배열에는 newArr의 원소가 아닌 원래의 값이 담겨있는 arr 배열의 원소를 삽입했다.

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
[N, items] = input;
N = Number(N);
const arr = items.split(" ").map(v => Number(v));

function solution(arr, n) {
    const countArr = Array(1000001).fill(0);
    arr.forEach(v => ++test[v]);
    const newArr = arr.map(v => countArr[v]);

    const stack = [];
    const result = Array(n).fill(-1);

    for(let i = 0; i < newArr.length; i++) {
        while(stack.length > 0 && stack[stack.length - 1][0] < newArr[i]) {
            const [val, idx] = stack.pop();
            result[idx] = arr[i];
        }
        stack.push([newArr[i],i]);
    }
    return result.join(" ");
}

console.log(solution(arr, N));


