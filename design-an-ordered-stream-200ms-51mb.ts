// declare class OrderedStream
class OrderedStream {
  // declare public property head, which is a number
  public head: number
  // declare public property parts, which is an array of strings
  public parts: string[]

  // to construct a new OrderedStream, pass in a number n
  constructor(n: number) {
    // this.parts will be equal to a new array of size n
    this.parts = new Array(n)
    // this.head will be set to 0
    this.head = 0
  }

  // method insert takes in a number called id, a string called value, and returns an array of 
  // strings
  insert(id: number, value: string): string[] {
    // set the value of this.parts at index id minus 1 equal to value
    this.parts[id - 1] = value
    
    // create a mutable array of strings called res
    let res: string[] = []
    // if id minus 1 is equal to this.head
    if (id - 1 === this.head) {
      // while the value of this.parts at this.head is a truthy value
      while (this.parts[this.head]) {
        // push the value of this.parts at index this.head onto result, and increment this.head 
        // afterward
        res.push(this.parts[this.head++])
      }
    }
    return res
  }
}
