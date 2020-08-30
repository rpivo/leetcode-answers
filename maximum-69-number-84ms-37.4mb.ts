function maximum69Number (num: number): number {
  const str = num + ''
  const index = str.indexOf('6')
  if (index > -1) {
    const arr = [...str]
    arr[index] = '9'
    return +arr.join('')
  }
  return num
}