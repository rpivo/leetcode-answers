class Solution {
  fun uniqueMorseRepresentations(words: Array<String>): Int {
    val morseLetters = arrayOf(
      ".-",
      "-...",
      "-.-.",
      "-..",
      ".",
      "..-.",
      "--.",
      "....",
      "..",
      ".---",
      "-.-",
      ".-..",
      "--",
      "-.",
      "---",
      ".--.",
      "--.-",
      ".-.",
      "...",
      "-",
      "..-",
      "...-",
      ".--",
      "-..-",
      "-.--",
      "--.."
    )
    val alphabet = arrayOf(
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    )
    var morseWords = mutableListOf<String>()
    words.forEach { word -> 
      var morseWord = ""
      for (i in 0 until word.length) {
        morseWord += morseLetters[alphabet.indexOf(word[i].toString())]
      }
      morseWords.add(morseWord)
    }
    return morseWords.distinct().size
  }
}

