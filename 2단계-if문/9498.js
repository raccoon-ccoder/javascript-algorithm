let input = require('fs').readFileSync('/dev/stdin').toString();


if(90 <= input && input <= 100){
    console.log('A');
}else if(80 <= input && input <= 89){
    console.log('B');
}else if(70 <= input && input <= 79){
    console.log('C');
}else if(60 <= input && input <= 69){
    console.log('D');
}else{
    console.log('F');
}