var sortArray = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    var minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums;
};

console.log(sortArray([5, 2, 3, 1]));
