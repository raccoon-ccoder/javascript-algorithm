const input = require("fs").readFileSync("./test.txt").toString().trim();

function solution(s) {
  let answer;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1] !== s[i])
      stack.push(s[i]);
    else stack.pop();
  }

  answer = stack.length ? 0 : 1;
  return answer;
}

console.log(solution(input));
