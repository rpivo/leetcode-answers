function numIdenticalPairs(nums: number[]): number {
  var map = new Map();
  var counter = 0;
  nums.forEach((x) => {
    if (map.has(x)) {
      const val = map.get(x);
      counter += val;
      map.set(x, val + 1);
    } else {
      map.set(x, 1);
    }
  });
  return counter;
}