fun balancedStringSplit(s: String): Int {
  var lCount = 0
  var rCount = 0
  var balanced = 0
  s.toCharArray().forEach {
    if (it.toString() == "L") lCount++ else rCount++
    if (lCount == rCount) balanced++
  }
  return balanced
}