// https://www.acmicpc.net/problem/11055
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 208ms, 메모리 : 9688KB

// 배열의 첫번째 원소부터 증가하는 부분 수열의 최대 길이를 구한다 (upDP)
// 그 후 뒤에서부터 배열을 돌며 감소하는 부분 수열의 최대 길이를 구한다 (downDP)
// 그 후, upDP + downDP를 더해 가장 최댓값 - 1을 반환한다 (두개 배열 모두 자기 자신을 포함하기에 중복)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ").map((v) => Number(v));
const n = Number(input[0]);

function solution(arr, n) {
  const upDP = new Array(n).fill(1);
  const downDP = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    const current = arr[i];
    let cnt = 1;

    for (let j = 0; j < i; j++) {
      const compare = arr[j];
      if (compare < current) cnt = Math.max(cnt, upDP[j] + 1);
    }
    upDP[i] = cnt;
  }

  for (let i = n - 2; i >= 0; i--) {
    const current = arr[i];
    let cnt = 1;

    for (let j = i + 1; j < n; j++) {
      const compare = arr[j];
      if (compare < current) cnt = Math.max(cnt, downDP[j] + 1);
    }
    downDP[i] = cnt;
  }

  const answer = upDP.map((v, i) => v + downDP[i]);
  return Math.max(...answer) - 1;
}

console.log(solution(arr, n));
