// https://www.acmicpc.net/problem/1002
// 테스트 케이스 수 t, 각각 (x1,y1,r1) (x2,y2,r2) 좌표와 반지름 길이가 주어짐
// 경우의 수는 6개다.
// 1. 원이 두 점에서 만나는 경우 (r2 - r1 < d < r2 + r1)
// 2. 두 원이 외접하는 경우 (한점)(d = r2 + r1)
// 3. 두 원이 내접하는 경우 (한점)(d = r2 - r1 && d !== 0)
// 4. 하나의 원이 다른 원을 포함하는 경우 (만나지 않음)(d <  r2 - r1)
// 5. 두 원이 멀리 떨어져 만나지 않는 경우 (d > r2 + r1)
// 6. 두 원이 겹치는 경우 (d === 0, r1 === r2)

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);

for(let i=1;i<= t;i++) {
    const arr = input[i].split(' ').map(num => parseInt(num));
    const x1 = arr.shift();
    const y1 = arr.shift();
    let r1 = arr.shift();
    const x2 = arr.shift();
    const y2 = arr.shift();
    let r2 = arr.shift();

    const dx = x1 - x2;
    const dy = y1 - y2;
    if(r1 > r2) {   // r1 <= r2로 정의
        const temp = r1;
        r1 = r2;
        r2 = temp;
    }
    
    const rSum = (r1 + r2) * (r1 + r2);
    const rSub = (r2 - r1) * (r2 - r1);
    const d = dx * dx + dy * dy;
 
    if(rSub < d && d < rSum) {
        console.log(2);
    }else if(d === rSum || (d === rSub && d !== 0)) {
        console.log(1);
    }else if(d < rSub || d > rSum) {
        console.log(0);
    }else if(d === 0) {
        if(r1 === r2) {
            console.log(-1);
        } else {
            console.log(0);
        }
    }
}
