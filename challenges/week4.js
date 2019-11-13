function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  //if number is less than 0 return it 
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      newArr.push(nums[i])
    }
  }
  return newArr;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  //loop through and filter names beginning with the character entered.
  let beginningWith = names.filter(function (item) {
    if (item[0] === char) {
      return true;
    } else {
      return false;
    }
  })
  return beginningWith;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
