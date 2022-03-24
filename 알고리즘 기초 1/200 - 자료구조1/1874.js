// https://www.acmicpc.net/problem/1874
// 입력 받은 숫자를 for문으로 꺼낸다
// while문으로 count를 1씩 증가하며 스택에 넣는다 (꺼낸 숫자와 같을때까지)
// 스택에서 pop하고, 만약 pop한 숫자가 입력에서 받은 숫자와 다르면
// 수열을 만들 수 없기에 NO 반환

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
[n, ...sequence] = input;
sequence = sequence.map(v => parseInt(v));

function solution(n, sequence) {
    const stack = [];
    let answer = '';
    let count = 1;
    
    for(let i = 0; i < n; i++) {
        const num = sequence.shift();

        while(count <= num) {
            stack.push(count++);
            answer += "+ ";
        }

        const popedItem = stack.pop();
        if(popedItem !== num) {
            return "NO";
        }
        answer += "- ";
    }
    return answer.split(" ").join("\n");
}

const answer = solution(n, sequence);
console.log(answer);
