// https://www.acmicpc.net/problem/17087
// 시간 제한 : 1초, 메모리 제한 : 512MB
// 시간 : 280ms, 메모리 : 234848KB

// 수빈이의 위치 X와 각 동생들의 위치를 요소로 담고 있는 배열 arr이 있을 때
// 각 동생들과 수빈이의 위치 차이를 구한 후 그 값들의 최대 공약수를 구한다
// 최대공약수는 유클리드 호제법을 이용했으며 
// 위치 차이는 큰 값이 앞으로 오도록 정렬하여 큰 값부터 작은 값 순으로 최대공약수를 구했다
// 만약 동생이 한명이라면 이동할 수 있는 거리는 X - arr[0]이므로 값을 바로 반환했다

const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
[a ,b] = input;
const X = Number(a.split(" ")[1]);
const arr = b.split(" ").map(Number);

function solution(x, arr) {
    if(arr.length === 1) {
        return Math.abs(arr[0] - x);
    }
    const newArr = arr.map(v => Math.abs(v - x)).sort((a,b) => b - a);
    let result = gcd(newArr[0], newArr[1]);

    for(let i = 0; i < newArr.length - 1; i++) {
        const GCD = gcd(newArr[i], newArr[i + 1]);
        if(GCD < result) {
            result = GCD;
        }
    }
    return result;
}

function gcd(a, b) {
    if(b === 0) {
        return a;
    }else {
        const c = a % b;
        return gcd(b ,c);
    }
}

console.log(solution(X, arr));