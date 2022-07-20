//problem: there are M categories and N regions. all participants from a region are assigned to the same category, and each category has at least one region 
//assigned to it. The success metric of the campaign is measured by the sum of medians of the number of participants in each category. 
//task: find the maximum possible value of the success metric that can be obtained by assigning participants in regions to the categories.
//Input
//The first line of the input gives the number of test cases, T. T test cases follow.
//The first line of each test case contains two integers N and M: the number of regions, and the number of categories respectively.
//The next line contains N integers A1,A2,…,AN.
//Output
//For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) 
//and y is the maximum possible value of the success metric.

//passed two tests
const fs = require("fs");
const raw = fs.readFileSync(0, "utf8").trim().split("\n");

let caseNumber = parseInt(raw[0]);

for (i = 1; i <= caseNumber; i++) {
  let KPI = 0;
  let totalCount = parseInt(raw[2 * i - 1].split(" ")[0]);
  let totalGroup = parseInt(raw[2 * i - 1].split(" ")[1]);
  let list = raw[2 * i]
    .split(" ")
    .map((a) => parseInt(a))
    .sort((a, b) => b - a);
  let singleGroups = list.slice(0,totalGroup - 1);
  let group = list.slice(totalGroup - 1);
  KPI = sum(singleGroups) + median(group);

  //*******************Donot change this line *******/

  console.log(`Case #${i}: ${KPI}`);
}

function sum(list) {
  let total = 0;
  for (let number of list) {
    total += number;
  }
  return total;
}

function median(arr) {
    const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}
