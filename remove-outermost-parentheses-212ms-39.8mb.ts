function removeOuterParentheses(S: string): string {
  let balance = 0
  const leftIndices: number[] = []
  return S.split('').map((char, index) => {
    if (balance === 0) leftIndices.push(index)
    if (char === '(') balance -= 1
    else balance += 1
    if (balance === 0) return ''
    return char
  }).filter((_, index) => !leftIndices.includes(index))
    .join('')
};