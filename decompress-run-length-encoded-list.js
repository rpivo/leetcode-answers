var decompressRLElist = function(nums) {
  let arr = [];
  for (let index = 0; index < nums.length; index += 2) {
    let count = nums[index];
    while (count-- > 0) {
      arr.push(nums[index + 1]);
    }
  }
  return arr;
};