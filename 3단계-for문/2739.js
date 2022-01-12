let input = require('fs').readFileSync('/dev/stdin').toString();
var n = parseInt(input);
var i = 1;

while(i<10){
    console.log(n + ' * ' + i + ' = ' + n*i);
    i++;
}