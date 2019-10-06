var arraysIntersection = function(arr1, arr2, arr3) {
  const intersecting = [];
  arr1.forEach(num => (arr2.includes(num) && arr3.includes(num)) && intersecting.push(num));
  return intersecting;
};

const arr1 = [1,2,3,4,5];
const arr2 = [1,2,5,7,9];
const arr3 = [1,3,4,5,8];

console.log(arraysIntersection(arr1, arr2, arr3));