function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  return startTime.reduce(
    (sum, item, index) => item <= queryTime && endTime[index] >= queryTime ? sum += 1 : sum,
  0)
}