function capitalize(word) {
    if (word === undefined) throw new Error('word is required');
    // Add your code here!
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    const capitalizedWord = firstLetter + restOfWord;
    return capitalizedWord;
}

function generateInitials(firstName, lastName) {
    if (firstName === undefined) throw new Error('firstName is required');
    if (lastName === undefined) throw new Error('lastName is required');
    // Add your code here!
    const firstInitial = firstName.slice(0);
    const lastInitial = lastName.slice(0);
    const initials = firstInitial.charAt(0) + '.' + lastInitial.charAt(0);
    console.log(initials);
    return initials;
}

function addVAT(originalPrice, vatRate) {
    if (originalPrice === undefined) throw new Error('originalPrice is requied');
    if (vatRate === undefined) throw new Error('vatRate is required');
    // Add your code here!
    const vatTotal = (originalPrice / 100) * (vatRate + 100);
    return +(Math.round(vatTotal + 'e+2') + 'e-2');
}

function getSalePrice(originalPrice, reduction) {
    if (originalPrice === undefined) throw new Error('originalPrice is required');
    if (reduction === undefined) throw new Error('reduction is required');
    // Add your code here!
    const salePrice = originalPrice - reduction;
    return salePrice;
}

function getMiddleCharacter(str) {
    if (str === undefined) throw new Error('str is required');
    // Add your code here!
    //if string is even return middle character
    if (str.length % 2 === 0) {
        return str[str.length / 2 - 1] + str[str.length / 2];
    } else {
        return str[Math.floor(str.length / 2)];
    }
}

function reverseWord(word) {
    if (word === undefined) throw new Error('word is required');
    // Add your code here!
    if (word === '') {
        return '';
    } else {
        return reverseWord(word.substr(1)) + word.charAt(0);
    }
}

function reverseAllWords(words) {
    if (words === undefined) throw new Error('words is required');
    // Add your code here!
    return [...words].reverse().join('');
}

function countLinuxUsers(users) {
    if (users === undefined) throw new Error('users is required');
    // Add your code here!
    let total = 0;
    users.forEach(function(linux) {
        const machineType = linux.type;
        if (machineType === 'Linux') {
            total = total += 1;
        }
    });
    return total;
}

function getMeanScore(scores) {
    if (scores === undefined) throw new Error('scores is required');
    // Add your code here!
    let totalSum = 0;
    for (let i in scores) {
        totalSum += scores[i];
    }
    let numsCnt = scores.length;
    let mean = totalSum / numsCnt;
    return mean;
}

function simpleFizzBuzz(n) {
    if (n === undefined) throw new Error('n is required');
    // Add your code here!
    let result;
    if (n % 15 === 0) {
        result = 'fizzbuzz';
    } else if (n % 3 === 0) {
        result = 'fizz';
    } else if (n % 5 === 0) {
        result = 'buzz';
    } else {
        result = n;
    }
    return result;
}

module.exports = {
    capitalize,
    generateInitials,
    addVAT,
    getSalePrice,
    getMiddleCharacter,
    reverseWord,
    reverseAllWords,
    countLinuxUsers,
    getMeanScore,
    simpleFizzBuzz
};