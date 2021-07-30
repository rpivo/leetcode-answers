class Solution:
    def squareIsWhite(self, coordinates: str) -> bool:
        odd_letters = ["a", "c", "e", "g"]
        odd_numbers = ["1", "3", "5", "7"]
        c, n = coordinates
        return True if c in odd_letters and n not in odd_numbers or c not in odd_letters and n in odd_numbers else False
