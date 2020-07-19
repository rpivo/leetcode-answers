class Solution {
  fun freqAlphabets(s: String): String {
    var result = ""
    var i = 0
    while (i < s.length) {
      if (i + 2 < s.length && s[i + 2] == '#') {
        result += ((s[i].toString() + s[i + 1].toString()).toInt() + 64).toChar().toLowerCase()
        i += 3
      } else {        
        result += (s[i].toString().toInt() + 64).toChar().toLowerCase()
        i += 1
      }
    }
    return result
  }
}