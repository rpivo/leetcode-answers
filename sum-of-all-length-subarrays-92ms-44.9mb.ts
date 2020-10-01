function sumOddLengthSubarrays(arr: number[]): number {
  let  arrSize = 1, result = 0
  while (arrSize <= arr.length) {
    for (let i = 0; i < arr.length; i++) {
      const subArr = arr.slice(i, i + arrSize)
      if (subArr.length === arrSize) {
        result += subArr.reduce((total, item) => total + item, 0)
      }
    }
    arrSize += 2
  }
  return result
};