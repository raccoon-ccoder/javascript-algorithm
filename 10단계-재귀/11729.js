// https://www.acmicpc.net/submit/11729
// n : 탑 갯수, count : 옮긴 총 횟수, answer : 수행 과정
// 원반의 개수가 몇개던지 시작 기둥(from)에서 목표 기둥(to)으로 모든 원반을 옮기려면
// 맨 밑의 원반이 목표 기둥으로 옮겨져야 하는 것은 필수 과정
// 1. 맨 밑의 원반을 시작 기둥(from)에서 목표 기둥(to)으로 옮긴다.
// 2. 맨 밑 원반 제외 나머지 원반들이 시작 기둥에서 나머지 기둥(other)으로 옮겨져야 함
// 3. 나머지 원반들을 나머지 기둥(other)에서 목표 기둥(to)으로 옮긴다.

// 2번 과정이 성립하기 위해선 계속해서 재귀적으로 만족이 되어야 함
// 원반 5개일경우 처음 맨 아래 5번 원반을 목표 기둥에 옮겨야 함
// 그러기 위해선 나머지 4개 원반이 나머지 기둥에 옮겨져야 함
// 또 그러기 위해선 4번 원반이 목표 기둥으로 옮겨져야 함
// 또 또 그러기 위해선 나머지 3개 원반이 나머지 기둥에 옮겨져야 함
//... 반복되는 재귀

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = Number(input);
let count = 0;
let answer = [];

function Hanoi(num, from, other, to) {
   if(num === 0) {
    return;
   }else {
       Hanoi(num -1, from , to, other);
       answer.push([from, to]);
       count++;
       Hanoi(num -1, other, from, to);
   }
}

Hanoi(n, '1', '2', '3');
console.log(count);
console.log(answer.map((element) => element.join(" ")).join("\n"));

