let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

// 일반 문자열이 아닌 ' ' 공백 1개만 있는 문자열이 들어올 경우 split된 array에는 ["",""]만 들어오게 된다
// 따라서 예외 처리 필요
if(input[0] === ''){
    console.log(0);
}else{
    console.log(input.length);
}
