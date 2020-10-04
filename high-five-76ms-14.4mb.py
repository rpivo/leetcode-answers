class Solution:
  def highFive(self, items: List[List[int]]) -> List[List[int]]:
    d = dict()
    [d
      [item[0]].append(item[1]) if item[0] in list(d.keys()) else d.update({item[0]: [item[1]]})
    for item in items]
    l = []
    for key, value in d.items():
      value.sort(reverse=True)
      subList = value[:5]
      l.append([key, sum(subList) // len(subList)])
    return l