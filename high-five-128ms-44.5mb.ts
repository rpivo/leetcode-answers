function highFive(items: number[][]): number[][] {
  const map = new Map();
  for (const item of Object.values(items)) {
    if (map.has(item[0])) map.set(item[0], [...map.get(item[0]), item[1]]); 
    else map.set(item[0], [item[1]]);
  }
  const result = [];
  for (const entry of map.entries())
    result.push([
      entry[0],
      Math.floor(entry[1]
        .sort((a: number, b: number) => b - a)
        .slice(0, 5)
        .reduce((sum: number, item: number) => sum + item)
      / 5)
    ]);
  return result;
};