// https://www.acmicpc.net/problem/9012
// 각 테스트 케이스마다 괄호가 알맞게 작성되었다면 YES, 아니면 NO를 출력해야 하는 문제
// ( 는 +1, )는 -1로 계산해 각 케이스의 문자열 길이만큼 반복문을 돌며 결과값(result)을 계산한다
// 만약 중간에 result가 0보다 작다면 ) 닫는 괄호가 더 많은 것이므로 식이 성립되지 않아 반복문을 중단
// 모든 반복문을 돌은 후 최종 result가 0이 아니라면 (, 혹은 ) 괄호가 더 많은 것이므로 올바른 식이 아니므로 false
// 각 테스트 케이스의 결과는 answer 배열에 담아 한꺼번에 출력

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[T, ...cases] = input;
const answer = [];

for(let i = 0; i < T; i++) {
    const str = cases[i].split('');
    let result = 0;

    for(let j = 0; j < str.length; j++) {
        str[j] === '(' ? result += 1 : result -= 1;
        
        if(result < 0) {
            break;
        } 
    }

    result === 0 ? answer.push('YES') : answer.push('NO');
}

console.log(answer.join('\n'));