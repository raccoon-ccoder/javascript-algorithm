// https://www.acmicpc.net/problem/1931
// 완전탐색 유형으로 접근해 모든 경우의 수를 따져서 최선의 답을 고르는 것도 좋지만 입력이 최대 10만이므로 효율적이지 않음
// 그리디 알고리즘을 이용
// 활동선택 문제 : 한 번에 하나의 활동만 처리할 수 있는 하나의 강의실에서 제안된 활동들 중 가장 많은 활동을 처리할 수 있는 스케줄을 짜는 문제
// 회의 시간이 빨리 끝나는 순으로 정렬 (끝나는 시간이 같다면 빨리 시작하는 순으로 정렬)
// 매 순간마다 바로 시작할 수 있는 강의를 고른다
// 반복문을 돌며 이전 회의 시간이 끝나야 다음 회의를 진행할 수 있기에
// 이전 회의 종료 시간보다 현재 반복문을 돌고 있는 회의의 시작시작이 빨리 시작하면 넘어간다
// 그렇지 않다면 회의가 진행되는 것이기에 cnt를 1씩 증가한다

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[n, ...meetings] = input;
n = parseInt(n);
meetings = meetings.map(item => item.split(' '));
meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let cnt = 0;
let previousEnd = 0;
let currentStart = 0;
let currentEnd = 0;

for(let i=0;i<n;i++) {
    currentStart = Number(meetings[i][0]);
    currentEnd = Number(meetings[i][1]);
    if(currentStart < previousEnd) {
        continue;
    }else {
        cnt++;
    }
    previousEnd = currentEnd;
}

console.log(cnt);