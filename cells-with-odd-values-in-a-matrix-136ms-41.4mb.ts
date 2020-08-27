function oddCells(n: number, m: number, indices: number[][]): number {
  let arr = [...Array(n)].map(x => Array(m).fill(0));
  indices.forEach(([x, y]) => {
    arr[x] = arr[x].map(item => item + 1);
    arr.forEach(item => item[y] += 1);
  });
  return [...arr
          .toString()
          .split(',')
         ].filter(char => /\d/.test(char) && +char % 2 !== 0)
          .length;
};