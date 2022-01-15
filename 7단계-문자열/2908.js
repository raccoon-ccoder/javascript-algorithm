let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let a = input[0];
let b = input[1];

let changedA = "";
let changedB = "";

for(let i=0;i<3;i++){
    changedA += a.charAt(2-i) + "";
    changedB += b.charAt(2-i) + "";
}

changedA = Number(changedA);
changedB = Number(changedB);

if( changedA > changedB){
    console.log(changedA);
}else{
    console.log(changedB);
}