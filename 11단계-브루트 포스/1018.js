// https://www.acmicpc.net/step/22
// M x N 크기의 보드가 있을 때, 잘라서 8X8 크기의 체스판을 만든다.
// 8 <= N,M <= 50
// 경우의수 : (M - 7) * (N - 7) (최소 크기가 8*8일때 경우의 수가 1이기 때문)
// 첫번째 시작판이 검정색 혹은 흰색 2가지 경우기에 총 경우의 수 : 2 * (M - 7) * (N - 7)

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[size, ...arr] = input;
[row, col] = size.split(' ');
arr = arr.map(str => str.trim('\r').split(''));
let min = 64;

let n_row = row - 7;    // 경우의 수 M - 7
let n_col = col - 7;    // 경우의 수 N - 7

for(let i = 0; i < n_row; i++ ) {
    for(let j = 0; j < n_col; j++) {
        find(i, j);
    }
}


function find(x, y) {
    const end_x = x + 8;
    const end_y = y + 8;
    let count = 0;
    let BW = arr[x][y]; // 첫번째 체스판 색깔

    for(let i = x; i < end_x ; i++) {
        for(let j = y; j < end_y; j++) {

            // 올바른 색이 아닐 경우 count 증가 (색칠해야 하는 개수)
            if(arr[i][j] !== BW) {
                count++;
            }
            BW = (BW === 'B' ? 'W' : 'B');
        }
        BW = (BW === 'B' ? 'W' : 'B');
    }
    // 첫번째 칸을 기준으로 할 때 색칠할 개수(count), 첫번째와 반대되는 색을 기준으로 할 때 색칠할 개수 중 작은 것을 저장
    count = Math.min(count, 64 - count);

    // 이전까지의 경우 중 최솟값보다 현재 count 값이 더 작을 경우 최솟값 갱신
    min = Math.min(count, min);
}

console.log(min);

