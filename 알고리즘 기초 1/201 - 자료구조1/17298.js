// https://www.acmicpc.net/problem/17298
// 시간 제한 : 1초, 메모리 제한 : 512MB
// 시간 896ms, 메모리 266140KB

// 입력 받은 숫자의 배열을 반복문을 돌리며 스택에 값을 넣기 전에
// 스택에 가장 위에 있는 값이 현재의 값보다 작거나 스택이 빌때까지 pop 연산을 해서 뺀다
// 그러고 현재의 값을 스택에 push
// 여기서 스택의 가장 위의 값이 pop 되는 순간 바로 해당 인덱스의 오큰수가 현재의 값이 된다
// 참고로 스택에 원소를 집어넣을 때 해당 값의 인덱스를 함께 넣어줘야 스택에서 pop하면서 빨리 오큰수를 업데이트 할 수 있음

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
[N, items] = input;
N = Number(N);
const arr = items.split(" ").map(v => Number(v));

function solution(arr, n) {
    const stack = [];
    const result = Array(n).fill(-1);

    for(let i = 0; i < arr.length; i++) {
        while(stack.length > 0 && stack[stack.length - 1][0] < arr[i]) {
            const [val, idx] = stack.pop();
            result[idx] = arr[i];
        }
        stack.push([arr[i],i]);
    }
    return result.join(" ");
}

console.log(solution(arr, N));


