let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let x = Number(input);

function ap(num){
    let stringNum = num.toString();
    let diff = Number(stringNum.substring(0,1)) - Number(stringNum.substring(1,2));
    let result = true;

    // 가장 오른쪽에 있는 숫자는 체크할 수가 없으므로 length - 1
    for(let i=1;i<stringNum.length-1;i++){
        let interval = Number(stringNum.substring(i, i+1)) - Number(stringNum.substring(i+1, i+2));
        if(diff != interval){
            result = false;
            break;
        }
    }

    return result;
}

let count = 0;

if(x < 100){
    count = x;
}else {
    for(let j=100;j<=x;j++){
        if(ap(j) == true){
            count++;
        }
    }
    count += 99;
}
console.log(count);