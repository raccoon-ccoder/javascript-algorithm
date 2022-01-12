let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
var hour = parseInt(input[0]);
var minute = parseInt(input[1]);

if(minute < 45){
    minute += 15; // (minute + 60) - 45

    if(0 < hour){
        hour -= 1;
    }else{  // hour == 0일경우
        hour = 23;
    }
}else{
    minute -= 45;
}

console.log(hour + ' ' + minute);