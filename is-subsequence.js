// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
  // create a map of each string-this preserves the order in which they are inserted into the Map
  const firstStr = makeCharMap(str1)
  const secondStr = makeCharMap(str2)
  // iterate through the keys of both maps and filter out the chars in str2 that are not in str1
  const firstKeys = Array.from(firstStr.keys())
  const secondKeys = Array.from(secondStr.keys())
  const filtered = secondKeys.filter((char) => firstKeys.includes(char))
  console.log(firstKeys, filtered)
  // compare the two arrays to see if they contain the same elements in the same order
  if (firstKeys.length !== filtered.length) return false
  for (let i = 0; i < firstKeys.length; i++) {
    if (firstKeys[i] !== filtered[i]) return false
  }
  return true
}

function makeCharMap(str) {
  const charMap = new Map()

  for (let char of str) {
    charMap.set(char, true)
  }
  return charMap
}

module.exports = isSubsequence
