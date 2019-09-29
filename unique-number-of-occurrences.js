var uniqueOccurrences = function(arr) {
  const set = new Set(arr);
  let lengths = [];
  set.forEach((num) => {
    lengths.push(arr.filter(x => x === num).length);
  });
  lengths = new Set(lengths);
  return (lengths.size === set.size) ? true : false;
};

const arr = [-3,0,1,-3,1,1,1,-3,10,0];

uniqueOccurrences(arr);