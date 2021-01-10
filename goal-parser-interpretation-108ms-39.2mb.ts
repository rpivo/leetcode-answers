function interpret(command: string): string {
  let result = ''
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') result += 'G';
    else if (command[i] === '(') {
      if (command[i + 1] === ')') result += 'o';
      else result += 'al'
    }
    else continue
  }
  return result
};