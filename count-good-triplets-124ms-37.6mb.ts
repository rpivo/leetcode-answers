function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  let sum: number = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      for (let k = 2; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[k] - arr[i]) <= c &&
          i < j &&
          j < k
        ) sum++;
      }
    }
  }
  return sum;
};