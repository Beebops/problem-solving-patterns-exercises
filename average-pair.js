// write a function that takes in as parameters a sorted array of integers and a target average
// it returns true if there is at least 1 pair of values in the array that equal the target average
// averagePair([1,2,3], 2.5) // true
//  left[0] = 1, right[2] = 2, 1 + 3 = 4 add 1 to right idx
// left[1] =  2, right[2] = 3, 2 + 3 = 5

// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)
// left = 1, right = 19, 20 / 2 is greater than target
// so decrement right
// 1 + 12 = 13 /2 is less than target
//so increment left
// 3 + 12 = 15 / 2 is less than target
// so increment left
// 3 + 12 = 15 / 2 is less than target
// so increment left
// 5 + 12 = 17 / 2 is more than target
// so decrement right
// 5 + 10 = 15/2 is less than target
// so increment left
// 6 + 10 = 16 / 2 equals target

function averagePair(arr, target) {
  // iterate over the sorted array
  for (let i = 0; i < arr.length; i++) {
    // define pointers for the left and right elements of the array
    let left = 0
    let right = arr.length - 1
    // as long as the left pointer is less than the right
    while (left < right) {
      // add element of left to element of right
      // divide by 2
      // if result is equal to target return true
      if ((arr[left] + arr[right]) / 2 === target) return true
      if ((arr[left] + arr[right]) / 2 > target) {
        right--
      } else {
        left++
      }
    }
  }
  return false
}

module.exports = averagePair
