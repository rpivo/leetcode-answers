function arraysIntersection(arr1: number[], arr2: number[], arr3: number[]): number[] {
  return arr1.filter(item => arr2.includes(item) && arr3.includes(item));
};