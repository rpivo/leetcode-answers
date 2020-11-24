class OrderedStream:
  def __init__(self, n: int):
    self.parts = {}
    self.head = 0


  def insert(self, id: int, value: str) -> List[str]:
    self.parts[id - 1] = value
    result = []
    if id - 1 == self.head:
      while self.head in self.parts:
        result.append(self.parts[self.head])
        self.head += 1
    return result