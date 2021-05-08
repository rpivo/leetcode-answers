// declare function countMatches, which takes in an array of arrays of strings called items, a
// string called ruleKey, and a string called ruleValue, and returns a number.
function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  // create mutable variable count and initialize it to 0
  let count = 0;

  // loop through each item and pull off the three indices of the item.
  // these indices are locally called type, color, and name.
  for (const [type, color, name] of items) {
    // create a switch based on the value of ruleKey
    switch (ruleKey) {
      // if the ruleKey is type
      case "type":
        // if type is equal to ruleValue
        if (type == ruleValue) {
          // increment count
          count++;
        }
        break;
      // if the ruleKey is color
      case "color":
        // if color is equal to ruleValue
        if (color == ruleValue) {
          // increment count
          count++;
        }
        break;
      // if the ruleKey is name
      case "name":
        // if name is equal to ruleValue
        if (name == ruleValue) {
          // increment count
          count++;
        }
        break;
    }
  }

  return count;
}
