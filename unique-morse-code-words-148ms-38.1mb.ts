function uniqueMorseRepresentations(words: string[]): number {
  const morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  return new Set(
    words.map(word =>
       [...word]
         .map((_, i) => morseArr[word.charCodeAt(i) - 97])
         .join('')
    )).size
}