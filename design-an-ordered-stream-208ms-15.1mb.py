# declare class OrderedStream
class OrderedStream:
  # define OrderedStream's constructor, which takes in the class instance (self), and an integer 
  # called n
  def __init__(self, n: int):
    # set self.d equal to an empty dictionary
    self.d = {}
    # set self.ptr equal to 1
    self.ptr = 1

  # define function insert, which takes in the class instance (self), an integer called id, a 
  # string called value, and returns a list of strings
  def insert(self, id: int, value: str) -> List[str]:
    # if id is equal to self.ptr
    if id == self.ptr:
      # create new variable ans and set it equal to a list that contains a single value, value
      ans = [value]
      # while id plus 1 exists in the dictionary self.d
      while (id + 1) in self.d:
        # push the value of self.d at index id + 1 into the list ans
        ans.append(self.d[id + 1])
        # increment id
        id += 1
      # set self.ptr equal to id plus 1
      self.ptr = id + 1
      return ans
    # set self.d at index id equal to value
    self.d[id] = value