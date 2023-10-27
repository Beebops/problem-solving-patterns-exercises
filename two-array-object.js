// write a function that takes in 2 arrays of varying lengths
// the first array consists of keys, the second array consists of values
// return an object created from the keys and values
// if there are not enough values for each key, the values should be set to null
// if there are not enough keys for all the values, ignore the rest of the values

// twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {a:1, b: 2, c:3, d: null}
// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
// twoArrayObject(['x', 'y', 'z'], [1, 2]) // // {'x': 1, 'y': 2, 'z': null}
function twoArrayObject(keys, values) {
  // instantiate an empty result object
  const result = {}
  // loop over the keys
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    // set key to be the key in the resultObj
    // set value of key to be the value at corresponding idx in values array
    if (!values[i]) {
      values[i] = null
    }
    result[key] = values[i]
  }

  return result
}

module.exports = twoArrayObject
