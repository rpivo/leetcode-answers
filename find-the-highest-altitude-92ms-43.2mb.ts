function largestAltitude(gain: number[]): number {
  function getElevations(elevations = [0], curr) {
    return [...elevations, curr+ +elevations.slice(-1)]
  }
  return Math.max(...gain.reduce(getElevations, [0]))
}
