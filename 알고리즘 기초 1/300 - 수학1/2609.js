// https://www.acmicpc.net/problem/2609
// 시간 제한 : 1초, 메모리 제한 : 128MB
// 시간 : 128ms, 메모리 : 9588KB

// 최대 공약수는 유클리드 호제법을 이용해 구했으며 최소공배수는 최대 공약수 * (a / 최대공약수) * (b / 최대공약수)로 구했다
// 유클리트 호제법
// A > B 일경우
// 1. A % B = C
// 2. B % C = D
// X % Y === 0이 될때까지 위 과정을 반복한다
// 두 정수 A,B를 직사각형의 두 변의 길이라 생각하면 직사각형을 정사각형으로 완전히 채우려 할 때
// 정사각형의 가장 긴 변의 길이를 구하는 문제로 바꿀 수 있다
// 참고 : https://nanarin.tistory.com/101

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);

function solution(a, b) {

    function gcd(a ,b) {
        if(b === 0) {
            return a;
        } else {
            const c = a % b;
            return gcd(b , c);
        }
    }
    
    const gcf = gcd(a, b);
    const lcm = (a / gcf) * (b / gcf) * gcf;
    return gcf + "\n" + lcm;
}

console.log(solution(a, b));
