// write a function that takes in two positive integers
// return true if each number has the same frequency of digits
// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(22, 222) // false

function sameFrequency(num1, num2) {
  // convert the input nums to strings to pass them into freqMaker
  const num1Frequencies = mapFreqMaker(num1.toString())
  const num2Frequencies = mapFreqMaker(num2.toString())
  // {1: 1, 8: 1, 2: 2}, {2: 1, 8: 1, 1: 1}
  // {3:1, 4:1}, {1:1, 4:1}
  // {2:2}, {2:3}

  // if the maps are different sizes return false
  if (num1Frequencies.size !== num2Frequencies.size) return false
  // iterate over keys in first map
  for (let key of num1Frequencies.keys()) {
    // if the key in first map doesn't match key in second map return false
    if (num2Frequencies.has(key) !== num1Frequencies.has(key)) return false
    // if value of key in first map does not equal value of key in second map return false
    if (num2Frequencies.get(key) !== num1Frequencies.get(key)) return false
  }
  return true
}

function mapFreqMaker(arr) {
  const mapFreq = new Map()

  for (let val of arr) {
    let valCount = mapFreq.get(val) || 0
    mapFreq.set(val, valCount + 1)
  }
  return mapFreq
}
module.exports = sameFrequency

console.log(sameFrequency(182, 281))
