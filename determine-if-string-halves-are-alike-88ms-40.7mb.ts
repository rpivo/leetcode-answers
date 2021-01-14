function halvesAreAlike(s) {
  const vowels = c => ['a', 'e', 'i', 'o', 'u'].includes(c)
  const vowelLength = str => str.toLowerCase().split('').filter(vowels).length
  return vowelLength(s.slice(0, s.length / 2)) === vowelLength(s.slice(s.length / 2))
}
