//Problem: Imagine that you want to type a word S that is N characters long. The linear keyboard K has M keys. 
//It is guaranteed that the keys cover all characters in S. However, some of the keys may be duplicates. All characters and keys are represented as integers.
//You may start with your finger on any key. It takes 1 second to move your finger from a key to an adjacent key. 
//Due to Glide Typing, there is no pressing a key. If the finger is currently at the key i which has character Ki, and we want to type the character Kj at index j, 
//we will glide the finger from the key i to the key j, which takes |j−i| seconds. If your finger is at key x, you can type character Kx any number of times instantly. 
//You need to type string S character by character. Formally, you need to type Si before Si+1 for each 1≤i≤N−1.
//Input
//The first line of the input gives the number of test cases, T. T test cases follow.
//The first line of each test case contains one integer N: the length of the word S.
//The second line of each test case contains N integers: each Si is the character at the i-th index.
//The third line of each test case contains one integer M: the length of the keyboard K.
//The fourth line of each test case contains M integers: each Ki is the character at the i-th key.
//2
//5
//1 2 3 2 1
//3
//1 2 3
//3
//1 1 1
//2
//2 1
//Output
//For each test case, output one line containing the minimal time needed to type the word. Case #x: y, where x is the test case number (starting from 1) 
//and y is the minimal time needed to type S on the keyboard K.
//Case #1: 4
//Case #2: 0

//passed one test: It is guaranteed that there are no duplicated keys in keyboard K.
const fs = require("fs");
const raw = fs.readFileSync(0, "utf8").trim().split("\n");

let caseNumber = parseInt(raw[0]);

for (let i = 1; i <= caseNumber; i++) {
  let words = raw[4 * i - 2].split(" ");
  let keys = raw[4 * i].split(" ");
  let steps = 0;
  for (let j = 1; j < words.length; j++) {
    steps += Math.abs(keys.indexOf(words[j])-keys.indexOf(words[j-1]));
  }
  console.log(`Case #${i}: ${steps}`);
}
