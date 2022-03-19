// https://www.acmicpc.net/problem/2751
// 합병 정렬, 시간복잡도 O(NlogN)
// 1. 정렬되지 않은 리스트를 각각 하나의 원소만 포함하는 n개의 부분리스트로 분할한다.
// 2. 부분리스트가 하나만 남을 때까지 반복해서 병합하며 정렬된 부분리스트를 생성한다. 마지막 남은 부분리스트가 정렬된 리스트이다.

// merge(left, right) : 반으로 나눠준 함수를 정렬해 새로운 배열로 만들어주는 함수
// mergeSort(arr) : 반으로 나눠주는 함수

let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
[num, ...arr] = input;

function merge(left, right) {
    const arr = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            arr.push(left.shift());
        }else {
            arr.push(right.shift());
        }
    }
    // left, right 둘 중 하나는 요소가 남아있기 않기에 순서는 상관없음
    // 비어있으면 spread Syntax에도 아무것도 없기 때문에 그냥 다 붙여준다.
    return [...arr, ...left, ...right];
}

function mergeSort(arr) {
    if(arr.length === 1) return arr;
    const boundary = Math.ceil(arr.length / 2);
    // slice이기에 원본 배열은 훼손 X
    const left = arr.slice(0, boundary);
    const right = arr.slice(boundary);

    // 요소가 1개일때까지 재귀 실행으로 요소 1개일 때부터, 두 left, right부터
    // 차근차근 merge해준다.
    return merge(mergeSort(left), mergeSort(right));
}

const sortedArr = mergeSort(arr);
console.log(sortedArr);