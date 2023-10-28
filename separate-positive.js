// write a function that accepts an array of non-zero integers
// it should return an array with the positive integers on the left, and the negative integers on the right
// the array returned does not need to be sorted
// do not use a copy of the input array to solve this problem- it should ne done in place

function separatePositive(arr) {
  let left = 0
  let right = arr.length - 1
  // while left idx is less than right idx
  while (left < right) {
    // if arr[left] is positive number increment left idx
    // else if arr[left] is negative number remove it from its original position and push to back
    arr[left] >= 0
      ? left++
      : (arr.push(arr[left]), arr.splice(left, 1), right--)
  }

  return arr
}

module.exports = separatePositive
