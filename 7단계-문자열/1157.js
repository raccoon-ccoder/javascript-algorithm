let input = require('fs').readFileSync('/dev/stdin').toString().trim();
input = input.toUpperCase();

var arr = [];

for(let i=0;i<26;i++){
    arr[i] = 0;
}

for(let i=0;i<input.length;i++){
    let charIndex = input.charCodeAt(i);
    arr[charIndex - 65]++;
}

var maxNum = Math.max.apply(null, arr);
var maxIndex = arr.indexOf(maxNum);
var result = '';

if(maxIndex != arr.lastIndexOf(maxNum)){
    result += '?';
}else {
    result = String.fromCharCode(maxIndex + 65);
}

console.log(result);