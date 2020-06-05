const uniquePathsIII = grid => {

  const findPoint = value => {
    for (let i = 0; i < grid.length; i++) {
      const checkedIndex = grid[i].indexOf(value);
      if (checkedIndex > -1) return [i, checkedIndex];
    }
  };

  const start = findPoint(1);
  const [endRow, endColumn] = findPoint(2);

  let movableSpaces = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) movableSpaces.push([i, j]);
    }
  }

  let paths = 0;

  const getNextMoves = (point, arr, solution = []) => {
    const [row, column] = point;

    const moves = [
      [row - 1, column],
      [row, column + 1],
      [row + 1, column],
      [row, column - 1],
    ];

    for (move of moves) {
      const [moveRow, moveColumn] = move;
      if (!arr.length) {
        if (moveRow === endRow && moveColumn === endColumn) paths += 1;
      } else {
        for (let i = 0; i < arr.length; i++) {
          const [pointRow, pointColumn] = arr[i];

          if (moveRow === pointRow && moveColumn === pointColumn) {
            solution.push([moveRow, moveColumn]);
            let tempArr = [...arr];
            tempArr.splice(i, 1); 
            getNextMoves(move, tempArr, solution);
          }
        }
      }
    }
  };

  getNextMoves(start, movableSpaces, []);

  return paths;
};