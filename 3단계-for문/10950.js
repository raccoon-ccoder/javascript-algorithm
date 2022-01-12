let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var caseNum = parseInt(input[0]);
var i = 0;

while(i<caseNum){
    var a = parseInt(input[i+1].split(' ')[0]);
    var b = parseInt(input[i+1].split(' ')[1]);
    console.log(a+b);
    i++;
}