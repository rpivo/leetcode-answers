def anagramMappings(self, A: List[int], B: List[int]) -> List[int]:
  return [B.index(a) for a in A]