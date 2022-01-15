let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=1;i<input.length;i++){
    let number = input[i].split(' ')[0];
    let word = input[i].split(' ')[1];
    let changedWord = "";

    for(let j=0;j<word.length;j++){
        let count = 1;

        while(count <= number){
            changedWord += word.charAt(j) + '';
            count++;
        }
    }
    console.log(changedWord);
}
