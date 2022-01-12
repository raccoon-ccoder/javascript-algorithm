let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var t = parseInt(input[0]);
var i = 0;
let answer = '';

while(i<t){
    var a = parseInt(input[i+1].split(' ')[0]);
    var b = parseInt(input[i+1].split(' ')[1]);
    answer += ((a+b) + '\n');
    i++;
}
console.log(answer);

// 시간 제한은 1초
// 결과를 하나씩 출력하면 시간초과
// 하나의 문자열에 결과값과 개행 문자를 넣어 마지막에 출력함
