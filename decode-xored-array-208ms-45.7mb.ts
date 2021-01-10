function decode(encoded: number[], first: number): number[] {
  const result = [first]
  let temp = first
  
  for (const n of encoded) {
    temp = temp ^ n
    result.push(temp)
  }
  
  return result
}