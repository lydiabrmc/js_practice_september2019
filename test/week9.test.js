const {
    sumMultiples,
    isValidDNA,
    // getComplementaryDNA,
    // isItPrime,
    // createMatrix,
    // areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("This function will receive an array of numbers and should return the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([9, 3, 15, 30, 1, 7])).toBe(57);
    });
})
//This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. 
//A valid DNA string may contain characters C, G, T or A only.
describe.only("isValidDNA", () => {
    test("returns true or false depending if valid string", () => {
        expect(isValidDNA("CGTA")).toBe(true);
    });
    test("returns true regardless of capitalisation", () => {
        expect(isValidDNA("cGTacC")).toBe(true);
    });

    // test("This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
    //     expect(isValidDNA("CEGAT")).toBe(false);
    // });
    // test("ignores case", () => {
    //     expect(isValidDNA("CeGaT")).toBe(false);
    // });

});

// describe("getComplementaryDNA", () => {
//     test("This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of 'ACTG' would have a complementary DNA string of 'TGAC'.", () => {
//         expect(getComplementaryDNA("ACTG")).toBe("TGAC");
//     });
// });

// describe("isItPrime", () => {
//     test("This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)", () => {
//         expect(isItPrime(7)).toBe(true);
//     });
//     test("This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)", () => {
//         expect(isItPrime(6)).toBe(false);
//     });
// });

// describe("createMatrix", () => {
//     test("This function should receive a number and return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays. For example, given parameters 3 and 'foo' the resulting matrix should be:[['foo', 'foo', 'foo'],['foo', 'foo', 'foo'], ['foo', 'foo', 'foo']]", () => {
//         expect(createMatrix((3, 'foo'))).toBe([['foo', 'foo', 'foo'], ['foo', 'foo', 'foo'], ['foo', 'foo', 'foo']]);
//     });
// });

// describe("areWeCovered", () => {
//     test("This function takes an array of staff objects in the format:[{ name: 'Sally', rota: ['Monday', 'Tuesday', 'Friday'] },{ name: 'Pedro', rota: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'] },...etc]and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.", () => {
//         expect(areWeCovered()).toBe(true);
//     });
//     test("This function takes an array of staff objects in the format:[{ name: 'Sally', rota: ['Monday', 'Tuesday', 'Friday'] },{ name: 'Pedro', rota: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'] },...etc]and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.", () => {
//         expect(areWeCovered()).toBe(false);
//     });
// });