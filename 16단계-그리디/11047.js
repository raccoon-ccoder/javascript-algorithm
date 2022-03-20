// https://www.acmicpc.net/problem/11047
// n개 종류의 동전을 최소의 개수로 k 값을 만들어야 한다
// n개의 종류의 동전을 배열로 가지는 coins는 요소들이 배수로 이뤄져 있다.
// ex ) coins = [1, 5, 10, 50, 100, 500 ,1000, 5000, 10000];

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[num, ...coins] = input;
[n, k] = num.split(' ');
let total = 0;
coins = coins.map(item => parseInt(item));

while(true) {
    let maxCoin = 0;

    if(k === 0) {
        break;
    }

    // k보다 작지만 가장 큰 값의 동전을 찾는다
    for(const val of coins) {
        if(val <= k && maxCoin < val) {
            maxCoin = val;
        }
    }

    // k / maxCoin 을 하여 몫을 총 개수에 더한 후 나머지 값을 k에 저장
    // k가 0이 될때까지 반복
    let cnt = Math.floor(k/maxCoin);
    total += cnt;
    k = k%maxCoin;
}

console.log(total);