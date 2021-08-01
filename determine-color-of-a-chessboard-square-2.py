# define class Solution
class Solution:
    # define function squareIsWhite, which takes in the class instance (self),
    # string coordinates, and returns a boolean
    def squareIsWhite(self, coordinates: str) -> bool:
        # set variable char equal to the integer representing the unicode
        # character of the value of coordinates at index 0. Take this ord value and
        # subract 97. This will be the value of char
        char = ord(coordinates[0]) - 97
        # set variable inte equal to the integer value of the character at index 1
        # of coordinates
        inte = int(coordinates[1])
        # if the value of char modulo 2 is equal to 0, and if the value of inte
        # modulo 2 is equal to 0
        if char % 2 == 0 and inte % 2 == 0:
            return True
        # else if char modulo 2 is not equal to 0, and if inte modulo 2 is not
        # equal to 0
        elif char % 2 != 0 and inte % 2 != 0:
            return True
        else:
            return False
