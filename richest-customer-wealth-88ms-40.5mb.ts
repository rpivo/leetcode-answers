function maximumWealth(accounts: number[][]): number {
  return Math.max(...accounts.map(row => row.reduce((sum, item) => sum + item, 0)))
}
