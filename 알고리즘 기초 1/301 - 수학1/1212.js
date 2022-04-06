// https://www.acmicpc.net/problem/1212
// 시간 제한 : 1초, 메모리 제한 : 256MB
// 시간 : 360ms, 메모리 : 42456KB

// 8진수의 숫자를 각 자리수마다 10진수로 변환 후 2진수로 변환하여 연결한다
// 단 변환한 10진수의 숫자가 1일 경우 2진수로 변환시 1이 아닌 001로 출력해야 한다 
// 세자리 2진수는 7까지 나타낼 수 있기 때문이다
// 그리고 마지막 8진수 숫자라면 0을 붙이지 않고 바로 2진수로 변환하여 붙인다

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(num) {
    let oct = "";

    while(num.length > 0) {
        if(num.length === 1) {
            oct = parseInt(num.slice(num.length - 1), 8).toString(2) + oct;
        }else {
            oct = (parseInt(num.slice(num.length - 1), 8).toString(2)).padStart(3,0) + oct;
        }
        num = num.slice(0, num.length - 1);
    }
    
    return oct;
}


console.log(solution(input));