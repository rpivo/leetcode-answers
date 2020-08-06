function subtractProductAndSum(n: number): number {
  let product: number = 1;
  let sum: number = 0;
  while (n > 0) {
    const digit = n % 10;
    product *= digit;
    sum += digit;
    n = Math.floor(n / 10);
  }
  return product - sum;
};