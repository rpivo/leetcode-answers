// declare function truncateSentence, which takes in a string s, a number k,
// and returns a string
function truncateSentence(s: string, k: number): string {
  // create mutable variable a, which is an array of strings, and set it equal
  // to the split result of s, splitting on space characters ' '. The second
  // argument for split() is the limit argument, which specifies a limit on
  // the number of substrings to be included in the array. This will truncate
  // the results to k strings.
  let a: string[] = s.split(" ", k);
  // create mutable variable b, which is a string, and set it equal to the
  // value of a joined by space characters ' '.
  let b: string = a.join(" ");
  return b;
}
