function finalValueAfterOperations(operations: string[]): number {
  const str = operations.join("");
  const dec = str.match(/--/g)?.length ?? 0;
  const inc = str.match(/\+\+/g)?.length ?? 0;
  return inc - dec;
}
