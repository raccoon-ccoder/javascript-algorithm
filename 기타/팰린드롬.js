const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(plain) {
  let len = plain.length;

  for (let i = 0; i < len; i++) {
    if (isPalindrome(plain.substring(i))) {
      return len + i;
    }
  }
  return 2 * len;
}

function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str.charAt(i) !== str.charAt(len - i - 1)) {
      return false;
    }
  }

  return true;
}

console.log(solution(input));
