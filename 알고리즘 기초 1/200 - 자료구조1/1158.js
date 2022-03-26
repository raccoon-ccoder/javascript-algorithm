// https://www.acmicpc.net/problem/1158
// 시간 : 124ms, 메모리 10900KB

// 1부터 N번까지 원을 그리며 앉는다. K번째 사람을 제거하고 다음 사람을 기준으로 N번째 사람을 계속 제거
// 제거되는 순서대로 숫자를 출력

// 기준점을 처음에는 0을 시작으로 기준점 + K - 1 % 배열의 길이의 값을 인덱스로 설정하여 해당 인덱스 요소 제거
// 제거되면 기준점은 다음 요소인데 어차피 요소가 1개 줄어들기에 인덱스는 제거된 요소 인덱스로 설정

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');
[N, K] = input;
N = parseInt(N);
K = parseInt(K);
const arr = Array.from({length : N}, (v, i) => i +1);

function solution(people, index) {
    const answer = [];
    let startIndex = 0;

    while(true) {
        if(people.length === 1) {
            break;
        }
        const removeIndex = (startIndex + index) % people.length;
        const removedItem = people[removeIndex];
        answer.push(removedItem);
        people.splice(removeIndex, 1);
        startIndex = removeIndex;
    }
    answer.push(people[0]);
    return "<" + answer.join(", ") + ">";
}

console.log(solution(arr, K - 1));
