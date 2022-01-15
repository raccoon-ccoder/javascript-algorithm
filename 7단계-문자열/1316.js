let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let countGroupWord = 0;

for(let i=1; i<input.length;i++){
    const word = input[i];
    const letter = [];
    let isGroupWord = true;

    for(let j=0;j<word.length;j++){
        if(letter.indexOf(word[j]) === -1){
            letter.push(word[j]);
        }else{
            if(letter.indexOf(word[j]) !== letter.length -1){
                isGroupWord = false;
                break;
            }
        }
    }

    if(isGroupWord){
        countGroupWord++;
    }
}

console.log(countGroupWord);

// 틀린 문제
// letter : 처음 발견된 글자는 넣는 곳
// 탐색한 글자가 letter 배열에 존재할 경우
// 해당 인덱스가 letter 배열의 마지막 요소가 아니라면 (글자가 중복한 경우 aaa)
// 이전에 탐색되었으며, 다시 발견된 경우이므로 그룹 단어에서 제외
