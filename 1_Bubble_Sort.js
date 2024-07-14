//75. Sort Colors
const sortColors = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        // [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};
console.log(sortColors([2, 0, 2, 1, 1, 0]));
