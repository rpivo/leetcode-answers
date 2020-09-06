function diagonalSum(mat: number[][]): number {
    const length = mat[0].length
    let result = 0
    for (let i = 0, j = length - 1; i < length; i++, j--) {
      if (i === j) result += mat[i][i]
      else result += mat[i][i] + mat[i][j]
    }
    return result
  };