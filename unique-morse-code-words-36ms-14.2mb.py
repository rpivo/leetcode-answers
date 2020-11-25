class Solution:
  def uniqueMorseRepresentations(self, words: List[str]) -> int:
    morseMap = {
      'a': '.-',
      'b': '-...',
      'c': '-.-.',
      'd': '-..',
      'e': '.',
      'f': '..-.',
      'g': '--.',
      'h': '....',
      'i': '..',
      'j': '.---',
      'k': '-.-',
      'l': '.-..',
      'm': '--',
      'n': '-.',
      'o': '---',
      'p': '.--.',
      'q': '--.-',
      'r': '.-.',
      's': '...',
      't': '-',
      'u': '..-',
      'v': '...-',
      'w': '.--',
      'x': '-..-',
      'y': '-.--',
      'z': '--..',
    }
    
    translations = []
    
    for word in words:
      translation = []

      for char in word:
        translation.append(morseMap[char])

      translations.append(''.join(translation))
    
    return len(set(translations))