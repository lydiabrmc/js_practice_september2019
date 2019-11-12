function getSquares(nums) {
    if (nums === undefined) throw new Error('nums is required');
    // Your code here!
    let squares = [];
    for (let i = 0; i < nums.length; i++) {
        squares.push(nums[i] * nums[i]);
    }
    return squares;
}

function camelCaseWords(words) {
    if (words === undefined) throw new Error('words is required');
    // Your code here!
    let camelC = [];
    // run through array
    for (let i = 0; i < words.length; i++) {
        // index of 0 is first letter in word which needs to be lower case
        // push this into camelC
        if (words.indexOf(words[i]) === 0) {
            camelC.push(words[i]);
        }
        // need to capitalise next word and push into array
        if (words.indexOf[words[i]] >= 1) {
            camelC.push(words[i][0].toUpperCase() + words[i].substring(1));
        }
    }
    //dont forget to return!!
    return camelC.join('');
}

function getTotalSubjects(people) {
    if (people === undefined) throw new Error('people is required');
    // Your code here!
    let subjectTotal = 0;
    people.forEach(function (person) {
        person.subjects.forEach(function (subject) {
            subjectTotal++
        })
    })
    return subjectTotal
}

function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");
    // Your code here!
    let ingredientFound = false;
    //loop through the items in the menu array
    menu.forEach(function (food) {
        //for every item, access the ingredients property then loop through the ingredients array in the object and compare with the ingredient input
        food.ingredients.forEach(function (item) {
            if (item === ingredient) {
                ingredientFound = true;
            }
        })
    })
    return ingredientFound;
}

function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error('arr1 is required');
    if (arr2 === undefined) throw new Error('arr2 is required');
    // Your code here!
}

module.exports = {
    getSquares,
    camelCaseWords,
    getTotalSubjects,
    checkIngredients,
    duplicateNumbers
};