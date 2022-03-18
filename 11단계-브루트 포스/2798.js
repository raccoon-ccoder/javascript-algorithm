// https://www.acmicpc.net/problem/2798
// 카드 n장이 있을 때 n장의 카드에서 3장을 뽑아서 더했을 때 숫자 m보다 이하인 합계 중 가장 큰 합계를 구한다
// n개의 숫자를 담은 배열 arr에서 index 0부터 3장을 뽑아 모든 경우의 수를 탐색한다.

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ').map(item => Number(item));
let max = 0;

for(let i=0;i<arr.length -2;i++) {
    for(let j=i+1;j < arr.length-1;j++) {
        for(let k=j+1;k < arr.length;k++) {
            let sum = arr[i] + arr[j] + arr[k];
            if(sum <= m && max < sum) {
                max = sum;
            }
        }
    }
}
console.log(max);