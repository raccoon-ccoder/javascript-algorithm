let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var i = 0;

while(true){
    var a = parseInt(input[i].split(' ')[0]);
    var b = parseInt(input[i].split(' ')[1]);
    if(a==0 && b==0){
        break;
    }
    console.log(a+b);
    i++;
}