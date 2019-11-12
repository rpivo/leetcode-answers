var judgeCircle = function(moves, left = up = right = down = 0) {
    moves.split('').forEach(move => {
      switch(move) {
        case 'L':
          right > 0 ? right -= 1 : left += 1;
          break;
        case 'U':
          down > 0 ? down -= 1 : up += 1;
          break;
        case 'R':
          left > 0 ? left -= 1 : right += 1;
          break;
        case 'D':
          up > 0 ? up -= 1 : down += 1;
          break;
      }
    });
    return left === 0 && up === 0 && right === 0 && down === 0 ? true : false;
};

console.log(judgeCircle('LRLR'));