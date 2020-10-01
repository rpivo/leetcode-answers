function finalPrices(prices: number[]): number[] {
  const result: number[] = []
  for (let i = 0; i < prices.length; i++) {
    if (i === prices.length - 1) result.push(prices[i])
    for (let j = i + 1; j < prices.length; j++) {
      const discount = prices[i] - prices[j]
      if (discount >= 0) {
        result.push(discount)
        break
      }
      if (j === prices.length - 1) result.push(prices[i])
    }
  }
  return result
};