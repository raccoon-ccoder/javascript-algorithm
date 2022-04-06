// https://www.acmicpc.net/problem/1373
// 시간 제한 : 1초, 메모리 제한 : 128MB
// 시간 : 316ms, 메모리 : 36656KB

// 문제 조건에서 주어지는 2진수의 길이가 1,000,000 을 넘지 않는다고 했으니
// 10진수로 변환시 엄청 큰 수가 나올 수 있기에 아래 코드는 통과하지 못한다
// parseInt(n, 2).toString(8)

// 세자리수 2진수는 최대 7까지 나타낼 수 있어서 (000~111) 2진수를 세자리씩 끊어서
// 10진수로 변환 후 이어 붙이면 8진수가 된다 ex) 111000111(2진수) => 707(8진수)

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(num) {
    let oct = "";

    while(num.length >= 3) {
        oct = parseInt(num.slice(num.length - 3), 2).toString(8) + oct;
        num = num.slice(0, num.length - 3);
    }
    
    return ((num ? parseInt(num, 2).toString(8) : "") + oct);
}


console.log(solution(input));