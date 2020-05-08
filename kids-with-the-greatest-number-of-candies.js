var kidsWithCandies = function(candies, extraCandies) {
  let bools = [];
  const max = Math.max(...candies);
  for (candy of candies) {
    bools.push(candy + extraCandies >= max);
  }
  return bools;
};