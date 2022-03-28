// https://www.acmicpc.net/problem/1935
// 시간 제한 : 2초, 메모리 제한 : 128MB
// 시간 : 116ms, 메모리 : 9324KB

// 후위 표기식과 각 피연산자를 대응하는 값으로 넣어서 식의 결과를 반환해야 한다
// 1. 각 피연산자에 대응하는 값을 넣는다
// 2. 후위 표기식 길이만큼 반복하여 숫자가 나오면 stack에 push
// 3. 식이 나오면 stack에서 2개의 숫자를 꺼내 계산하고 결과값을 push
// 이때 먼저 넣은 값이 연산자의 앞자리에 있어야 하므로 첫번째 pop한 숫자가 두번째 자리에 와야 한다

// 후위 표기식 읽는 법
// 왼쪽부터 순차적으로 읽으며 피연산자(숫자)는 지나치고 연산자가 나오면 연산자 앞쪽 두개의 숫자로 연산을 진행

const input = require("fs").readFileSync("./test.txt").toString().trim().split('\n');
[count, expression, ...numbers] = input;
numbers = numbers.map(Number);
count = Number(count);
const str = expression.split("");

function solution(str, numbers) {
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== "+" && str[i] !== "-" && str[i] !== "/" && str[i] !== "*") {
            const idx = str[i].charCodeAt(0) - 65;
            str[i] = numbers[idx];
        }
    }
    const stack = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] !== "+" && str[i] !== "-" && str[i] !== "/" && str[i] !== "*") {
           stack.push(str[i]);
        }else {
            const second = stack.pop();
            const first = stack.pop();
            let result;

            switch(str[i]) {
                case "+":
                    result = first + second;
                    break;
                case "-":
                    result = first - second;
                    break;
                case "*":
                    result = first * second;
                    break;
                case "/":
                    result = first / second;
                    break;
            }
      
            stack.push(result);
        }
    }
    return stack[0].toFixed(2);
}

console.log(solution(str,numbers));