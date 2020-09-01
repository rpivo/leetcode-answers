function destCity(paths: string[][]): string {
  const str = paths + ''
  let result = ''
  for (const arr of paths) {
    const regex = new RegExp(arr[1], 'g')
    const matches = str.match(regex)
    if (matches && matches.length < 2) result = matches[0]
  }
  return result
};