// https://www.acmicpc.net/problem/2750
// N개의 숫자가 주어졌을 때 오름차순으로 정렬하여 하나씩 출력하는 문제
// sort() 메서드를 이용해 간단하게 풀이

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input.shift()
const arr = input.sort((a, b) => a - b);
arr.forEach(item => console.log(item));