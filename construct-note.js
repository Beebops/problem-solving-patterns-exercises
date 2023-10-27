// write a function that returns true if the msg passed in can be constructed from the letters passed in
// assume that msg and letters will only be lowercase letters with no spaces or special characters
// constructorNote('aa', 'abc') // false {a:2}, {a: 1, b:1, c:1}
// constructorNote('abc', 'dcba') // true {a:1, b:1, c:1}, {a:1, b:1, c:1, d:1}
// constructNote('aabbcc', 'bcabcaddff') // true {a:2, b:2, c:2} {a:2, b:2, c:2, d:2, f:2}

function constructNote(msg, letters) {
  // create frequencyObjs to keep track of the number of each letter in the msg and letters strings
  const msgFrequencies = freqMaker(msg)
  const lettersFrequencies = freqMaker(letters)

  for (let key in msgFrequencies) {
    // if msgFrequencies key is not in lettersFrequencies return false
    if (!lettersFrequencies[key]) return false
    // if the number of letters in lettersFrequencies is less than the number of letters in the msgFrequencies obj, then return false
    if (lettersFrequencies[key] < msgFrequencies[key]) return false
  }
  return true
}

function freqMaker(str) {
  const freqObj = {}
  for (let char of str) {
    freqObj[char] = freqObj[char] ? freqObj[char] + 1 : 1
  }
  return freqObj
}

module.exports = constructNote
