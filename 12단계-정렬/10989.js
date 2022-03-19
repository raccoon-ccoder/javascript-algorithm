// https://www.acmicpc.net/problem/10989
// N개의 숫자가 주어짐 (1 ≤ N ≤ 10,000,000), 이 숫자들은 10,000보다 작거나 같은 자연수다
// N개의 숫자를 오름차순으로 정렬하여 출력하는 문제
// 숫자의 폭이 그리 넓지 않기에 카운팅 정렬 사용, 시간복잡도 : O(N)
// 정렬할 수의 범위가 작을때만 유리함
// ex) 정렬할 수가 0, 1000002, 10, 250 이라면 고작 4개의 수를 정렬하는데
// 0부터 1000002까지 배열을 만들어야 하기에 메모리 낭비됨

// 1. 수의 범위만큼의 크기를 가진 배열 생성 (numArr)
// 2. 주어진 배열을 돌며 해당 원소를 numArr 인덱스로 넣어 numArr[i]의 값을 추가
// 3. 반복문이 끝나면 numArr을 반복하며 원소값을 확인하여 몇번 나왔는지 확인

// 카운팅 정렬 문제였으나 메모리 초과로 풀지 못함
// node.js의 경우 입력을 받아 입력 값을 배열에 저장하는 것 부터 메모리 초과 문제 발생
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
[num, ...arr] = input;

// 가장 큰수를 찾아서 그 숫자만큼의 크기를 가진 numArr 생성
const max = Math.max(...arr);

// 0으로 원소값을 채워 숫자를 카운팅할때마다 1씩 증가
const numArr = new Array(max + 1).fill(0);

// 만약 7이라는 숫자가 나왔다면 numArr[7]의 원소값을 1 증가 (1번 나왔다는 뜻)
for(let i=0;i<arr.length;i++) {
    numArr[arr[i]]++;
}

for(let i=0;i<numArr.length;i++) {

    // 원소값이 0일경우 해당 숫자는 카운팅 되지 않았다는 의미
    if(numArr[i] === 0) {
        continue;
    }else {
        let cnt = 1;

        // 해당 원소값만큼 숫자가 카운팅되었기에 숫자만큼 반복하며 숫자 출력
        while(cnt <= numArr[i]) {
            console.log(i);
            cnt++;
        }
    }
}