class Solution:
  def removeOuterParentheses(self, S: str) -> str:
    indices = [0]
    balance = 0
    for i in range(0, len(S)):
      if S[i] is '(': balance -= 1
      else: balance += 1
      if balance is 0: indices.extend([i, i + 1])
    return ''.join([item for index, item in enumerate(S) if index not in indices])
        