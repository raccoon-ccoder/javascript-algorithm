let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var n = parseInt(input[0].split(' ')[0]);
var x = parseInt(input[0].split(' ')[1]);
var a = input[1].split(' ');
let answer = '';

for(var i=0;i<n;i++){
    if(parseInt(a[i]) < x){
        answer += parseInt(a[i]) + ' ';
    }
}

console.log(answer);

