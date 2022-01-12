let input = require('fs').readFileSync('/dev/stdin').toString();
var n = parseInt(input);
var result = 0;
while(n>0){
    result += n;
    n--;
}
console.log(result);