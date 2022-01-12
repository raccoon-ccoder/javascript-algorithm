let input = require('fs').readFileSync('/dev/stdin').toString();
var t = parseInt(input);
var i = 1;
let answer = '';
var star = '*';

while(i<=t){
    for(var step = 1; step <= t-i; step++ ){
        answer += ' ';
    }
    answer += star + '\n';
    star += '*';
    i++;
}

console.log(answer);

