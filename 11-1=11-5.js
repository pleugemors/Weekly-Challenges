"use strict";

function zeroesToEnd(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (Number(nums[i]) == 0) {
      nums.splice(i, 1);
      count++;
      i--;
    }
  }
  for (let i = 0; i < count; i++) nums.push(0);
  return nums;
}

console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); //--> [1, 2, 4, 5, 0, 0, 0]

console.log(zeroesToEnd([0, 0, 2, 0, 5])); //--> [2, 5, 0, 0, 0]

console.log(zeroesToEnd([4, 4, 5])); //--> [4, 4, 5]

console.log(zeroesToEnd([0, 0])); //--> [0, 0]

function shiftToRight(num, numShifts) {
  for (let i = 0; i < numShifts; i++) {
    if (num % 2 != 0) num--;
    num /= 2;
  }
  return num;
}
console.log(shiftToRight(80, 3)); //--> 10

console.log(shiftToRight(-24, 2)); //--> -6

console.log(shiftToRight(-5, 1)); //--> -3

console.log(shiftToRight(4666, 6)); //--> 72

console.log(shiftToRight(3777, 6)); //--> 59

console.log(shiftToRight(-512, 10)); //--> -1
