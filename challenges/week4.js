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
  let verbs = words.filter(function (item) {
    if (item.includes("to ")) {
      return true;
    } else {
      return false;
    }
  })
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let integers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      integers.push(nums[i]);
    }
  }
  return integers;
}


function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let userCity = [];
  users.forEach(function (item) {
    userCity.push(item.data.city.displayName)
  })
  return userCity;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let squareNum = nums.map(function (item) {
    return parseFloat(Math.sqrt(item).toFixed(2));
  })
  return squareNum;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let findSent = sentences.filter(function (item) {
    if (item.toLowerCase().includes(str.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  })
  return findSent;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  // filter through each array and find largest number in the array for each. 
  // return largest num
  let maxTri = [];
  triangles.forEach(function (item) {
    maxTri.push(Math.max(...item))
  })
  return maxTri;
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
