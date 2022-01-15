let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let count = 0;
let i = 0;

while(i<input.length){
    if(input.charAt(i) === 'c'){
        if(input.charAt(i+1) === '=' || input.charAt(i+1) === '-'){
            count++;
            i += 2;
        }else{
            i++;
            count++;
        }
    }else if(input.charAt(i) === 'd'){
        if(input.charAt(i+1) === '-'){
            count++;
            i += 2;
        }else if(input.charAt(i+1) === 'z' && input.charAt(i+2) === '='){
            count++;
            i += 3;
        }else{
            i++;
            count++;
        }
    }else if(input.charAt(i) === 'l'){
        if(input.charAt(i+1) === 'j'){
            count++;
            i += 2;
        }else {
            i++;
            count++;
        }
    }else if(input.charAt(i) === 'n'){
        if(input.charAt(i+1) === 'j'){
            count++;
            i += 2;
        }else {
            i++;
            count++;
        }
    }else if(input.charAt(i) === 's'){
        if(input.charAt(i+1) === '='){
            count++;
            i += 2;
        }else {
            i++;
            count++;
        }
    }else if(input.charAt(i) === 'z'){
        if(input.charAt(i+1) === '='){
            count++;
            i += 2;
        }else {
            i++;
            count++;
        }
    }else{
        i++;
        count++;
    }
}
console.log(count);