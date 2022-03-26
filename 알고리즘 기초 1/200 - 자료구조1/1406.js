// https://www.acmicpc.net/problem/1406
// 시간 제한 0.3s, 메모리 제한 512MB
// 결과 : 시간 - 592ms, 메모리 119616KB

// 커서 위치를 기준으로 하나의 문자열을 두개의 배열로 나눈다 (leftStack, rightStack)
// 맨처음 문자열에선 커서가 문자열의 가장 오른쪽에 위치하므로 leftStack에는 각 문자들이 배열 요소로 구성된다.
// L : leftStack의 마지막 요소를 pop하여 rightStack에 push한다
// D :커서를 오른쪽으로 한칸 옮기기에 rightStack을 pop하여 leftStack에 push한다
// 여기서 rightStack의 가장 첫번째 요소를 제거해서 옮겨야 하지 않나? 라고 생각하지만
// shift()는 배열 맨 앞 요소를 뺴야 하기에 시간 복잡도가 O(n)이다.
// 그에 비해 pop()은 시간 복잡도가 O(1)
// B :커서 왼쪽의 문자를 삭제하기에 leftStack을 pop()하여 마지막 문자를 제거
// P $ : 커서 왼쪽에 추가하기에 leftStack에 push()하여 새로운 문자 마지막에 추가

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
[str, M, ...orders] = input;

function solution(str, n, orders) {
    const leftStack = str.split("");
    const rightStack = [];

    for(let i = 0; i < orders.length; i ++) {
        const [command, value] = orders[i].split(" ");

        switch(command) {
            case "L":
                if(leftStack.length !== 0) {
                    rightStack.push(leftStack.pop());
                }
                break;
            case "D":
                if(rightStack.length !== 0) {
                    leftStack.push(rightStack.pop());
                }
                break;
            case "B":
                if(leftStack.length !== 0) {
                    leftStack.pop();
                }
                break;
            case "P":
                leftStack.push(value);
                break;
        }
    }

    return leftStack.concat(rightStack.reverse()).join("");
}

console.log(solution(str, M, orders));

