// https://www.acmicpc.net/problem/10828
// 시간 제한 0.5초, 결과 : 메모리 11816KB, 시간 136ms
// 1번째 방법으로 풀었으나 시간 초과로 인해 통과하지 못했다.
// 아무래도 각 명령을 수행할 때마다 출력을 시켜주는 코드에서 시간 초과가 발생한듯하다.
// 향상된 풀이에선 풀이를 배열에 저장하여 한꺼번에 출력하는 방식으로 풀어 통과했다.

// 1번째 풀이
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
[n, ...orders] = input;
orders = orders.map((item) => item.split(' '));

function push(n) {
    arr.push(n);
}

function pop() {
    if(arr.length === 0) {
        console.log(-1);
    }else {
        console.log(arr.pop());
    }
}

function size() {
    console.log(arr.length);
}

function empty() {
    if (arr.length === 0) {
        console.log(1);
    }else {
        console.log(0);
    }
}

function top() {
    if(arr.length === 0) {
        console.log(-1);
    }else {
        console.log(arr[arr.length-1]);
    }
}

for(let val of orders) {
    switch(val[0]) {
        case "push" :
            push(parseInt(val[1]));
            break;
        case "top" :
            top();
            break;
        case "size" :
            size();
            break;
        case "empty" :
            empty();
            break;
        case "pop" :
            pop();
            break;
    }
}

// 향상된 풀이
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
[n, ...orders] = input;

const stack = [];
const result = [];

for(let i = 0; i < n; i++) {
    switch(orders[i]) {
        case 'pop':
            result.push(stack.pop() || -1);
            break;
        
        case 'size':
            result.push(stack.length);
            break;
        
        case 'empty':
            result.push(stack.length === 0 ? 1 : 0)
            break;
        
        case 'top':
            result.push(stack[stack.length - 1] || -1);
            break;
        
        default:
            stack.push(orders[i].split(' ')[1]);
            break;
    }
}

console.log(result.join('\n'));

