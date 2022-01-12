let input = require('fs').readFileSync('/dev/stdin').toString();
var n = parseInt(input);
var i = 1;
let answer = '';

while(i<=n){
    answer += (i + '\n');
    i++;
}
console.log(answer);