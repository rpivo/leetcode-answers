function sortString(s: string): string {
  const sorted = s.split('').sort()
  const result = [sorted.shift()]
  while (sorted.length) {
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] !== result[result.length - 1]) {
        result.push(...sorted.splice(i, 1))
        i--
      }
    }
    if (sorted.length) {
      sorted.reverse()
      result.push(sorted.shift()) 
    }
  }
  return result.join('')
};