//Input
//The first line of the input gives the number of test cases, T. Each test case starts with a line containing the two integers N and Q, the number of blocks and the number of questions, respectively. 
//Then, another line follows, containing a string of N uppercase characters (A to Z). Then, Q lines follow. The i-th line contains the two integers Li and Ri, 
//describing the i-th question.
//Output
//For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the number of questions Anna can answer "yes" to.
//sample input:
//2
//7 5
//ABAACCA
//3 6
//4 4
//2 5
//6 7
//3 7
//3 5
//XYZ
//1 3
//1 3
//1 3
//1 3
//1 3
//sample output
//Case #1: 3
//Case #2: 0

const fs = require("fs");
const raw = fs.readFileSync("input2.txt", "utf8").trim().split("\n");

let i = 1;
let caseNum = 0;
while (i < raw.length) {
  const line = raw[i].split(" ");
  const lineNum = Number(line[1]);
  const blocks = raw[i + 1].split("");
  let count = 0;
  for (let j = i + 2; j < i + lineNum + 2; j++) {
    const indexNum = raw[j].split(" ");
    const left = indexNum[0];
    const right = indexNum[1];
    const substring = blocks.slice(left - 1, right);
    let pairCounts = {};
    for (let k = 0; k < substring.length; k++) {
      pairCounts[substring[k]] = (pairCounts[substring[k]] || 0) + 1;
    }
    const filtered = Object.entries(pairCounts).filter(
      ([key, value]) => value % 2 !== 0
    );
    if (
      Object.keys(filtered).length === 0 ||
      Object.keys(filtered).length === 1
    ) {
      count++;
    }
  }
  caseNum++;
  console.log(`Case #${caseNum}: ${count}`);
  i += lineNum + 2;
}
