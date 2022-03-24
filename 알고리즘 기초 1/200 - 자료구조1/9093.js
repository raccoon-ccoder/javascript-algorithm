// https://www.acmicpc.net/problem/9093
// 각 문장별로 띄어쓰기를 기준으로 분할한다
// 각 단어별로 거꾸로 바꾼뒤 배열에 담아 반복문이 끝나면 배열을 문장으로 바꿔 정답 배열에 넣는다
// 각 문장에 대한 뒤바꾼 문장은 바로 출력하는 것이 아닌 다 모아서 한꺼번에 출력한다.

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
[T, ...cases] = input;
const answer = [];

// 각 문장별로
for(let i = 0; i < T; i++) {
    let wordArr = cases[i].split(' ');
    let reversedWordArr = [];

    // 한 문장의 단어별로
    for(let j = 0; j< wordArr.length; j++) {
        let word = wordArr[j];
        let reversedWord = "";

        // 한 단어를 거꾸로
        for(let k = word.length - 1; k >= 0; k--) {
            reversedWord += word[k];
        }
        reversedWordArr.push(reversedWord);
    }
    answer.push(reversedWordArr.join(' '));
}

console.log(answer.join('\n'));
