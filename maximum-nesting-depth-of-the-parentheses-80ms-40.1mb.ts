function maxDepth(s: string): number {
  let depth = 0
  let maxDepth = 0

  s
    .split('')
    .filter(char => char === '(' || char === ')')
    .forEach(char => {
      if (char === '(') depth += 1
      else if (depth > 0) depth -= 1
      if (depth > maxDepth) maxDepth = depth
    })
  return maxDepth
}