// declare function interpret, which takes in a string called command, and returns a string.
function interpret(command: string): string {
  // create mutable variable result and set it equal to the result of calling split on command with
  // argument '(al)', and then joining this returned array, using 'al' as the argument to join on.
  let result = command.split('(al)').join('al')
  // set result equal to the result of calling split on result, using the argument '()' as the 
  // substring to split on, and then calling join on the returned array, using 'o' as the variable 
  // to join on.
  result = result.split('()').join('o')
  return result
}