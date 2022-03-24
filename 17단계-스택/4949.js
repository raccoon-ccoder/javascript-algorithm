// https://www.acmicpc.net/status?user_id=qorwjddus96&problem_id=4949&from_mine=1
// 문자열을 순회하여 여는 괄호가 나오면 stack에 push
// 닫는 괄호가 나오면 pop한 후 그 반환값이 짝이 맞는 여는 괄호가 아니면 no 출력
// 과정 끝난 후 (()[], ()[ 이런식의 입력을 받았다면 여는 괄호 하나가 남아 stack이 비어 있지 않음
// stack이 비어 있다면 yes를 출력, 그렇지 않다면 no를 출력

const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const open = ["(", "["];
const closed = [")", "]"];
let stack;
const yesno = [];
arr.slice(0, arr.length-1).forEach(v => {
    let isNo = false;
    stack = [];
    for (let i=0; i<v.length; i++) {
        if (open.includes(v[i])) stack.push(v[i]);
        else if (closed.includes(v[i])) {
            if (stack.pop() !== open[closed.indexOf(v[i])]) {
                yesno.push("no");
                isNo = true;
                break;
            }
        }
    }
    if (!isNo) {
        if (stack.length === 0) yesno.push("yes");
        else yesno.push("no");
    }
});
console.log(yesno.join("\n"));