let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var first = Number(input[0]);
var arr = input[1].split(' ');
let max = Number(arr[0]);
let min = max;

for(var i=1;i<arr.length;i++){
    if(max < Number(arr[i])){
        max = Number(arr[i]);
    }else if(min > Number(arr[i])){
        min = Number(arr[i]);
    }
}
console.log(min + ' ' + max);



