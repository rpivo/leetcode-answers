// declare function defangIPaddr that takes in a string called address, and returns a string
function defangIPaddr(address: string): string {
  // brackets indicate a set of characters to match
  // adding the 'i' flag at the end of the regex makes the search case-insensitive
  return address.replace(/[.]/gi, '[.]');
}