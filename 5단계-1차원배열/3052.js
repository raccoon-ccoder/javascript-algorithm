let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
// 코드 결과는 맞는데 제출하면 틀렸다고 자꾸 삽질한 원인 :
// 일부 입력값의 마지막에 개행문자가 포함된 경우가 있다.
// split('\n')할 경우 공백 문자를 하나 더 갖게 되므로 결과가 맞아도 제출하면 틀렸을 수도 있다.
// 방지하기 위해 trim() 사용! 
const num = 42;

let arr = [];

for(let i = 0;i < input.length;i++){
    let result = Number(input[i]) % num;

    if(!arr.includes(result)){
        arr.push(result);
    }
}

console.log(arr.length);