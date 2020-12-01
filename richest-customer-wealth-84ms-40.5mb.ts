// declare function maximumWealth, which takes in an array of arrays of numbers called accounts, 
// and returns a number
function maximumWealth(accounts: number[][]): number {
  // create mutable variable l and set it equal to -1
  let l = -1;
  // create mutable variable b
  let b;
  // create mutable variable m and set it equal to the length of accounts
  let m = accounts.length;
  // create mutable variable n and set it equal to the length of the first item of accounts
  let n = accounts[0].length;
  // loop from 1 to m minus 1
  for (let i = 0; i < m; ++i) {
    // set b equal to 0
    b = 0;
    // loop from 1 to n minus 1
    for (let j = 0; j < n; ++j) {
      // set b equal to b plus the value of accounts at row i and at item j
      b = b + accounts[i][j];
    }
    // if b is greater than l, then set l to b, else set it to l
    l = b > l ? b : l;
  }
  return l;
}