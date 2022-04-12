// https://www.acmicpc.net/problem/11053
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 196ms, 메모리 : 11576KB

// 주어진 수열의 길이만큼의 크기를 가진 dp 배열 생성
// dp[n]에는 index = n까지 배열에서 가장 긴 증가하는 부분 수열의 길이 저장
// 초기값이 1인 이유는 최소한 자기 자신은 다 가지고 있기 떄문

// ex : arr = [100, 200, 0, 1, 7, 300, 500]
// 1. dp[0] : 첫번째 요소인 100은 반복문 돌 필요가 없기에 dp[0] = 1
// 2. dp[1] : 자기보다 앞에 있는 요소들과 비교
// if(arr[0] < arr[1]) => correct
// 따라서 dp[1] = dp[0] + 1 = 2

// 3. dp[2]
// 1) if(arr[0] < arr[2]) => X
// 2) if(arr[1] < arr[2]) => X
// 자기보다 작은 값이 없기에 dp[2] = 1

const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");
[n, arr] = input;
arr = arr.split(" ").map(Number);

function solution(arr) {
  const dp = new Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    const values = [1];
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        values.push(dp[j] + 1);
      }
    }
    dp[i] = Math.max(...values);
  }
  return Math.max(...dp);
}

console.log(solution(arr));
