// https://www.acmicpc.net/problem/10799
//시간 제한 : 1초, 메모리 제한 : 256MB
// 제출 시간 : 228ms, 메모리 : 11596KB

// 주어진 input 문자열의 길이만큼 반복문을 돌며 (일 경우 stack에 push
// )일 경우는  stack에 pop을 한 후 두 가지 케이스로 나뉜다
// 1. 이전 문자가 (일 경우 레이저라는 의미로 stack애 있는 괄호의 갯수만큼 result에 더한다
// 2. 이전 문자가 (이 아닐 경우 한 쇠막대기기 끝났다는 의미로 result에 1을 더한다

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(str) {
    const stack = [];
    let result = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(") {
            stack.push(str[i]);
        }else {
            stack.pop();
            if(str[i - 1] === "(") {
                result += stack.length;
            }else {
                result += 1;
            }
        }
    }
    return result;
}

console.log(solution(input));



