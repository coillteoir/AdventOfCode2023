/*
 * ADVENT OF CODE 2023
 *
 * github.com/coillteoir
 *
 * RUN: node src/main.js
 */

const fs = require("node:fs");

fs.readFile("src/input", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(
    data
      .replaceAll("zero", "z0e")
      .replaceAll("one", "o1e")
      .replaceAll("two", "t2o")
      .replaceAll("three", "t3e")
      .replaceAll("four", "f4r")
      .replaceAll("five", "f5e")
      .replaceAll("six", "s6x")
      .replaceAll("seven", "s7n")
      .replaceAll("eight", "e8t")
      .replaceAll("nine", "n9e")
      .split("\n")
      .map(parseString)
      .reduce((acc, val) => (Number.isInteger(val) ? acc + val : acc)),
  );
});

const parseString = (str) => {
  const nums = str.split("").filter(Number);
  return parseInt(nums[0] + nums[nums.length - 1]);
};
