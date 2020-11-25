function canFormArray(arr: number[], pieces: number[][]): boolean {
  let offset = 0
  return arr.every((item, index) => {
    if (index < offset) return true
    for (let i = 0; i < pieces.length; i++) {
      if (item === pieces[i][0]) {
        if (pieces[i].length > 1) {
          const isEqual = '' + arr.slice(index, index + pieces[i].length) === '' + pieces[i]
          if (isEqual) {
            offset = index + pieces[i].length
            return true
          }
        }
        return true
      }
    }
  })
}
