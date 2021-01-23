function countGoodRectangles(rectangles: number[][]): number {
  const minLengths = rectangles.map(item => Math.min(...item))
  const maxLength = Math.max(...minLengths)
  function equality(n) { return n === maxLength }
  return minLengths.filter(equality).length
}
