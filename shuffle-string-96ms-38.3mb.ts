// declare function restoreString, that takes in a string called s and an array of numbers called
// indices, and returns a string
function restoreString(s: string, indices: number[]): string {
  // create a new array starting with object { length: indices.length }
  // this is setting the length property of the array equal to the length of array indices
  // then it transforms each element of the array using a map function, which returns each item as ''
  let ans = Array.from({ length: indices.length }, () => '');
  // seems strange to use a map here since we're not generating a new array. this seems like an anti-pattern
  // sets ans at index newI equal to s at index i 
  indices.map((newI, i) => ans[newI] = s[i]);
  // join all items in ans and return
  return ans.join('');
}