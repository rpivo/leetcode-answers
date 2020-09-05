class Solution:
  def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
    sum = 0
    for i in range(0, len(arr)):
      for j in range(1, len(arr)):
        for k in range(2, len(arr)):
          if (
            i < j and
            j < k and
            abs(arr[i] - arr[j]) <= a and
            abs(arr[j] - arr[k]) <= b and
            abs(arr[i] - arr[k]) <= c
          ): sum += 1
    return sum
