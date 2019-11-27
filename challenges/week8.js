const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  //loop through array
  // return the number after the given n, so n+1 === nums
  // returns the next number after the given number in the array
  let nextNum = null;
  if (((nums.indexOf(n) + 1) < nums.length) && nums.indexOf(n) >= 0) {
    nextNum = nums[(nums.indexOf(n)) + 1]
  }
  return nextNum
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  // loop through array filtering out to get 1s and 0s
  // return how many 1s and 0s
  let count = {
    1: 0,
    0: 0
  };
  str.split('').forEach(item => {
    (parseFloat(item)) ? count[1]++ : count[0]++;
  })
  return count;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return parseInt(n.toString().split('').reverse().join(''))
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let counter = 0
  arrs.forEach(add => {
    add.forEach(num => {
      counter += num;
    })
  })
  return counter;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length >= 2) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
    return arr;
  } else {
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!  var found = undefined
  let found = false;
  Object.keys(haystack).forEach(hs => {
    if (haystack[hs].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
      found = true;
    }
  })

  return found;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
