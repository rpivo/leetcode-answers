function generateTheString(n: number): string {
    return n % 2 === 0 ? 'a'.repeat(n - 1) + 'b' : 'a'.repeat(n)
  };