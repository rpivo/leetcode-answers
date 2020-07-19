class Solution {
  fun destCity(paths: List<List<String>>): String {
    for (i in 0 until paths.size) {
      var current = paths[i][1]
      var found = false
      for (j in 0 until paths.size) {
        if (paths[j][0] == current) found = true
      }
      if (found == false) return current
    }
    return ""
  }
}