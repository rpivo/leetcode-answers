import kotlin.math.abs
import kotlin.math.max

class Solution {
  fun minTimeToVisitAllPoints(points: Array<IntArray>): Int {
    var seconds = 0
    var (x0, y0) = points[0]
    for (i in 1..points.size - 1) {
      var (x1, y1) = points[i]
      seconds += max(abs(x1 - x0), abs(y1 - y0))
      x0 = x1; y0 = y1
    }
    return seconds
  }
}