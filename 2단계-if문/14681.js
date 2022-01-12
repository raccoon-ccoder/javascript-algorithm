let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if(0<a && 0<b){
    console.log('1');
}else if(a<0 && 0<b){
    console.log('2');
}else if(a<0 && b<0){
    console.log('3');
}else{
    console.log('4');
}