const validSubarrays = nums => {
  let total = 0;
  let arr = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i - 1] && nums[i] < nums[i - 1]) {
      while (arr.length && arr[arr.length - 1] > nums[i]) arr.pop();
    }
    arr.push(nums[i]);
    total += arr.length;
  }
  return total;
}