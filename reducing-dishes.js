const maxSatisfaction = (satisfaction) => {
  satisfaction.sort((a, b) => a - b);
  let totals = [];
  for (let i = 0; i < satisfaction.length; i++) {
    const total = satisfaction
      .slice(i, satisfaction.length)
      .reduce((acc, curr, index) =>acc + (curr * (index + 1)), 0);
    totals.push(total);
  }
  const max = Math.max(...totals);
  return max > 0 ? max : 0;
};