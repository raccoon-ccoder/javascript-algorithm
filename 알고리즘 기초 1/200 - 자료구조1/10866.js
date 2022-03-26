// https://www.acmicpc.net/problem/10866
// 시간 제한 : 0.5초, 메모리 제한 : 256MB
// 시간 : 232ms, 메모리 : 14716KB
// 각 명령들을 switch case문으로 풀면서 각 명령마다 출력해야 하는 값은 answer 배열에 넣어
// 한꺼번에 정답을 출력했다.

const input = require("fs").readFileSync("./test.txt").toString().trim().split('\n');
[N, ...sequences] = input;
sequences = sequences.map(v => v.split(' '));

function solution(arr) {
    const deque = [];
    const answer = [];

    for(let i = 0; i < arr.length; i++) {
        const [sequence, value] = arr[i];

        switch(sequence) {
            case "push_front":
                deque.unshift(value);
                break;
            case "push_back":
                deque.push(value);
                break;
            case "pop_front":
                if(deque.length !== 0) answer.push(deque.shift());
                else answer.push(-1);
                break;
            case "pop_back":
                if(deque.length !== 0) answer.push(deque.pop());
                else answer.push(-1);
                break;
            case "size":
                answer.push(deque.length);
                break;
            case "empty":
                if(deque.length !== 0) answer.push(0);
                else answer.push(1);
                break;
            case "front":
                if(deque.length !== 0) answer.push(deque[0]);
                else answer.push(-1);
                break;
            case "back":
                if(deque.length !== 0) answer.push(deque[deque.length - 1]);
                else answer.push(-1);
                break;
        }
    }
    return answer.join("\n");
}

console.log(solution(sequences));


