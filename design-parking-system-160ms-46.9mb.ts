class ParkingSystem {
  bigCount: number;
  mediumCount: number;
  smallCount: number;
  
  constructor(big: number, medium: number, small: number) {
    this.bigCount = big;
    this.mediumCount = medium;
    this.smallCount = small;
  }

  addCar(carType: number): boolean {
    switch(carType) {
      case 1: {
        if (this.bigCount > 0) {
          this.bigCount -= 1;
          return true;
        } else return false;
      }
      case 2: {
        if (this.mediumCount > 0) {
          this.mediumCount -= 1;
          return true;
        } else return false;
      }
      case 3: {
        if (this.smallCount > 0) {
          this.smallCount -= 1;
          return true;
        } else return false;
      }
      default:
        return false;
    }
  }
}