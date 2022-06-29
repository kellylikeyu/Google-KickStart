//Sample Input
//2
//7 3
//1 2 3 4 5 6 7
//5 10
//7 7 7 7 7
//Sample Output
//Case #1: 1
//Case #2: 5
//The first line of the input gives the number of test cases, T. T test cases follow.
//Each test case consists of two lines. The first line of each test case contains two integers: integer N, the number of candy bags, and M, the number of kids.
//The next line contains N non-negative integers C1,C2,…,CN representing array C, where the i-th integer represents the number of candies in the i-th bag.



//********Read file from system
// const fs = require("fs")
// const raw = fs.readFileSync(0, "utf8").trim().split("\n");

//********Read file from local
const fs = require("fs");
const raw = fs.readFileSync("input.txt", "utf8").trim().split("\n");

const CASELINE = 2;

for (let i = 1; i < raw.length; i += CASELINE) {
  const line = raw[i].split(" ");
  const bags = Number(line[0]);
  const kids = Number(line[1]);
  const candies = raw[i + 1].split(" ");
  let sum = 0;
  for (let candy of candies) {
    sum += Number(candy);
  }
  const remain = sum % kids;
  console.log(`Case #${(i + 1) / 2}: ${remain}`);
}
