class Solution:
  def getDecimalValue(self, head: ListNode) -> int:
    result = []
    while (head is not None):
      result.append(head.val)
      head = head.next
    strings = [str(integer) for integer in result]
    result = ''.join(strings)
    return int(result, 2)