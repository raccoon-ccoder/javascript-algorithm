// https://www.acmicpc.net/problem/11399
// people 배열을 정렬 후 각 원소를 돌때마다 이전 결과값을 더해서 돈을 인출하는데 필요한 합의 최솟값을 구한다
// 참고로 JS의 sort()는 paramenter가 없을 경우 유니코드 순서에 따라 값을 정렬
// 따라서 숫자를 오름차순으로 정렬 하기 위해선 아래처럼 파라미터를 입력해야 한다
// ex) const arr = [2, 1, 4, 10];
// arr.sort(); // [1, 10, 2, 4]

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[n, people] = input;
people = people.split(' ').map(item => parseInt(item));
people.sort((a,b) => a-b);

let result = 0;
let time = 0;

for(let i=0;i<n;i++) {
    time += people[i];
    result += time;
}

console.log(result);
