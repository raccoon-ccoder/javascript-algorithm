let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

// 숫자의 각 자리수 추출 방법
// 문자열 변환 toString()
// substring(indexStart[, indexEnd])

var firstNumber = b.toString().substring(0,1);
var secondNumber = b.toString().substring(1,2);
var thirdNumber = b.toString().substring(2,3);

console.log(a*thirdNumber);
console.log(a*secondNumber);
console.log(a*firstNumber);
console.log(a*b);