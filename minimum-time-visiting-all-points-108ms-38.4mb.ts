function minTimeToVisitAllPoints(points: number[][]): number {
  let sum = 0;
  for (let i = 1; i < points.length; i++) {
    const depart = points[i - 1];
    const arrive = points[i];
    sum += Math.max(...[
        Math.abs(arrive[0] - depart[0]),
        Math.abs(arrive[1] - depart[1]),
      ]);
  }
  return sum;
};