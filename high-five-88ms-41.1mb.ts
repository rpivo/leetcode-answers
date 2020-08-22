// declare function highFive that takes in an array of arrays of numbers called items, and returns 
// an array of arrays of numbers
function highFive(items: number[][]): number[][] {
  // create mutable variable organizedScores that's an array of arrays of numbers and initialize 
  // as empty.
  let organizedScores: number[][] = [];
  // loop through each array in items
  items.forEach(item => {
    // create immutable copy of the first item inside the item array
    const id = item[0];
    // create immutable copy of the second item inside the item array
    const score = item[1];
    // if the organizedScores array does not have an item at index id
    if (!organizedScores[id]) {
      // set organizedScores at index id equal to an empty array
      organizedScores[id] = [];
    }
    // push score onto organizedScores at index id
    organizedScores[id].push(score);
  });
  console.log('organized ' + organizedScores);

  // create mutable variable result that's an array of arrays of numbers and initialize as empty
  let result: number[][] = [];
  // loop through each item inside organizedScores and include the index
  organizedScores.forEach((scores, index) => {
    // create immutable variable sorted that's an array of scores but sorted from highest to lowest.
    const sorted = scores.sort((a, b) => b - a);
    console.log('sorted ' + sorted);
    // create immutable variable average that is the floored average of the first five items from 
    // the sorted array
    const average = Math.floor(sorted.slice(0, 5).reduce((a, b) => a + b) / 5);
    console.log('average ' + average);
    // push the index and the average as an array to result
    result.push([index, average]);
  });

  console.log(result);
  return result;
}