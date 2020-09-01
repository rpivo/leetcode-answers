// declare function destCity that takes in an array of arrays of strings, and returns a string
function destCity(paths: string[][]): string {
  // create immutable string array called startCities and initialize with an empty array
  const startCities: string[] = []
  // create immutable string array called endCities and initialize with an empty array
  const endCities: string[] = []
  // create mutable string variable called destintation and initialize as an empty string
  let destination: string = ''
  // loop through each array in paths
  paths.forEach(array => {
    // push the first item in the array to startCities
    startCities.push(array[0])
    // push the second item in teh array to endCities
    endCities.push(array[1])
  })
  // loop through each item in endCities
  endCities.forEach(element => {
    // if startCities does not include the element
    if (!startCities.includes(element)) {
      // set destination equal to element
      destination = element
    }
  })
  return destination
}