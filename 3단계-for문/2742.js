let input = require('fs').readFileSync('/dev/stdin').toString();
var n = parseInt(input);
var i = 1;
let answer = '';

while(i<=n){
    answer += (n + '\n'); 
    n--;
}

console.log(answer);

