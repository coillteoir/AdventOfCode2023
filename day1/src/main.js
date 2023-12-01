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
      .split("\n")
      .map(parseString)
      .reduce((acc, val) => Number.isInteger(val) ? acc + val : acc),
  );
});

const parseString = (str) => {
  const nums = str.split("").filter(Number);

  return parseInt(nums[0] + nums[nums.length - 1]);
};
