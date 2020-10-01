// declare function finalPrices that takes in an array of numbers called prices, and returns an 
// array of numbers
function finalPrices(prices: number[]): number[] {
  // create mutable variable res that's an array of numbers and set it to an empty array
  let res: number[] = []
  // loop from 0 to the length of prices
  for (let i: number = 0; i < prices.length; i++) {
    // create mutable variable psize that's a number and set it equal to the length of res
    let psize: number= res.length
    // loop from i plus 1 to the length of prices
    for (let j: number = i + 1; j < prices.length; j++) {
      // if the value of prices at index j is less than or equal to the value of prices at index i
      if (prices[j] <= prices[i]) {
        // push the result of the value of prices at index i minus the value of prices at index j
        res.push(prices[i] - prices[j])
        // get out of here
        break
      }
    }
    // if psize is equal to the length of res
    if (psize === res.length) {
      // push the value of prices at index i to res
      res.push(prices[i])
    }
  }
  return res
}