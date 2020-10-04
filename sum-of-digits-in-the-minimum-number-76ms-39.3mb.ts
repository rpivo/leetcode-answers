function sumOfDigits(A: number[]): number {
  return (Math.min(...A) + '').split('').reduce((sum, digit) => +digit + sum, 0) % 2 === 0 ? 1 : 0
};
