// https://www.acmicpc.net/problem/17413
// 시간 제한 : 1초, 메모리 : 512MB
// 시간 : 204ms, 메모리 : 15912KB

// 해당 문자열이 <>내에 있으면 단어가 아니며, 태그와 단어 사이에는 공백이 없다
// 문자열 사이에 공백이 있다면 단어로 분리하여 뒤바뀐 단어로 출력해야 한다
// 문자열의 시작과 끝은 공백이 아니다

// 1. 문자열의 길이만큼 반복문을 돌며 태그 문자가 등장한다면 단어가 아니므로 >가 나올때까지 words에 push
// push 후 answer 배열에 넣고 isTag = false로 변경
// 2. 태그 단어가 아니며 공백이라면 한 단어가 끝났으므로 words 배열을 뒤집어 answer에 push
// 3. 해당 문자열이 마지막 문자인데 태그 문자가 아니라면 마지막 문자를 words에 넣은 후 뒤집어서 answer에 push
// 4. 위의 경우에 다 해당되지 않는 다면 태그문자도 아니며 일반 문자이므로 words 배열에 해당 문자 push

const input = require("fs").readFileSync("/dev/stdin").toString().trim();


function solution(str) {
    let words = [];
    let answer = [];
    let isTag = false;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '<') {
            answer.push(words.reverse().join(""));
            words = [];
            words.push(str[i]);
            isTag = true;
        }else if(str[i] === '>') {
            words.push(str[i])
            answer.push(words.join(""));
            words = [];
            isTag = false;
        }else if(str[i] === " " && !isTag) {
            answer.push(words.reverse().join(""));
            answer.push(" ");
            words = [];
        }else if(i === str.length - 1){
            words.push(str[i]);
            answer.push(words.reverse().join(""));
        }else {
            words.push(str[i]);
        }
    }
    return answer.join("");
}

console.log(solution(input));


