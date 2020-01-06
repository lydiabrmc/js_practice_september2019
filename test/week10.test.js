const {
    sumDigits
} = require("../challenges/week10");

describe.only("sumDigits", () => {
    test("This function takes a number and returns the sum of all its digits", () => {
        expect(sumDigits((1, 2, 3))).toBe(6);
    });
})