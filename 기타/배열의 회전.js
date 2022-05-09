const input = require("fs").readFileSync("./test.txt").toString().trim();
const arrA = [7, 8, 10];
const arrB = [10, 7, 8];

function solution(arrA, arrB) {
  const lenA = arrA.length;
  const lenB = arrB.length;

  if (lenA !== lenB) return false;

  for (let i = 0; i < lenA; i++) {
    if (JSON.stringify(arrA) === JSON.stringify(arrB)) {
      return true;
    }
    arrA = rotate(arrA);
  }
  return false;
}

function rotate(arr) {
  const item = arr.pop();
  return [item, ...arr];
}

console.log(solution(arrA, arrB));
