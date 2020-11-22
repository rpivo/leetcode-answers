function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const kidWithMostCandies = Math.max(...candies)
  return candies.map(kid => kid + extraCandies >= kidWithMostCandies)
}