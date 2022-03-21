// https://www.acmicpc.net/problem/13305
// 가장 최저가인곳에서 기름을 구매해 제일 오른쪽 지점(도착점)까지 가야 한다.
// 최저가인 지점까지 도착하기 전까지는 그 전에 있는 곳 중 최저가에서 구매를 해야 한다
// 매 도시를 들릴 때마다 최저가인지 확인 후 갱신하여 총 금액을 계산한다.
// ex) 현재 최저가가 지금 머무르고 있는 곳의 가격보다 비싸다면 최저가가 갱신된다.
// distance 배열, gas 배열의 원소값들은 1이상 1,000,000,000 이하의 자연수이기에
// BingInt형으로 형변환을 하며 출력시 문자열로 변환하여 출력한다.

let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
[n, distance, gas] = input;
distance = distance.split(' ').map(item => BigInt(item));
gas = gas.split(' ').map(item => BigInt(item));

let total = BigInt(0);
let min  = gas[0];

for(let i=0;i<gas.length - 1; i++) {
    if(min > gas[i]) {
        min = gas[i];
    }
    total += min * distance[i];
}
console.log(total.toString());

