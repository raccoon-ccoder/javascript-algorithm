let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var t = parseInt(input[0]);
var i = 0;
let answer = '';

while(i<t){
    var a = parseInt(input[i+1].split(' ')[0]);
    var b = parseInt(input[i+1].split(' ')[1]);
    i++;
    answer += ('Case #' + i + ': ' + (a+b) + '\n'); 
}

console.log(answer);

