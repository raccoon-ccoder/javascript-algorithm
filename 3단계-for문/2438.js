let input = require('fs').readFileSync('test.txt').toString();
var t = parseInt(input);
var i = 1;
let answer = '';
var star = '*';

while(i<=t){
    answer += star + '\n';
    star += '*';
    i++;
}

console.log(answer);