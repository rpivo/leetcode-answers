# define a class called ParkingSystem
class ParkingSystem:

  # define a dict called garage
  garage = {}

  # __init__ is python's constructor method for classes.

  # define the __init__ constructor, which takes in the class instance, an integer called big, an 
  # integer called medium, and an integer called small
  def __init__(self, big: int, medium: int, small: int):
    # garage is available here on self, since self is an instance of the class
    # garage at key 1 is equal to big
    self.garage[1] = big
    # garage at key 2 is equal to medium
    self.garage[2] = medium
    # garage at key 3 is equal to small
    self.garage[3] = small

  # define method addCar, which takes in the class instance and an integer called carType, and 
  # returns a boolean
  def addCar(self, carType: int) -> bool:
    # if the value at self.garage key carType is a truthy value
    if self.garage[carType]:
      # decrement self.garage at key carType
      self.garage[carType] -= 1
      return True
    return False