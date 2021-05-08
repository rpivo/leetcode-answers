function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  const ruleMap = {
    type: 0,
    color: 1,
    name: 2,
  };

  let r = 0;

  for (const item of items) {
    if (item[ruleMap[ruleKey]] === ruleValue) r += 1;
  }

  return r;
}
