const stdin = process.openStdin();

stdin.addListener('data', (input) => {
  let string = input.toString().trim();
  const toRemove = [];
  let openedSets = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === '(') {
      openedSets += 1;
      if (openedSets === 1) {
        toRemove.push(i);
      }
    } else if (string.charAt(i) === ')') {
      openedSets -= 1;
      if (openedSets === 0) {
        toRemove.push(i);
      }
    }
  }
  toRemove.forEach((i) => {
    string = `${string.slice(0, i)}_${string.slice(i + 1)}`;
  });
  string = string.replace(/_/g, '');
  console.log(string);
  process.exit();
});
