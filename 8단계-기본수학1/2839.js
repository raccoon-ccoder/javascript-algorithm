// https://www.acmicpc.net/problem/2839
// 총 설탕 n, 5킬로 봉지수 x, 3킬로 봉지수 y, 총 봉지수 num
// 일단 최대 x를 구한 후 x값을 기준으로 y를 구한다
// y가 자연수가 아니라면 x의 값을 1씩 감소하며 y를 다시 구한다 (while)
// x가 음수가 되기 전까지 1씩 빼면서 y가 자연수가 되기까지 반복을 하다 x가 음수가 되면 num은 -1

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

let num;

let x = Math.floor(n / 5);
let y = (n % 5) / 3;

while(true) {
    if(y % 1 === 0) {
        num = x + y;
        break;
    }

    x -= 1;
    y = (n - 5*x) / 3; 
 
    if(x < 0) {
        num = -1;
        break;
    }
}


console.log(num);
