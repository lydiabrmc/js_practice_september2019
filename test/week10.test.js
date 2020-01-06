const {
    sumDigits,
    createRange
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("This function takes object numbers and returns the sum of all its digits", () => {
        expect(sumDigits((1, 2, 3))).toBe(6);
    });
})

describe.only("createRange", () => {
    test("returns array of numbers in succession from start to end by adding step", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    });
    test("if no step defined. Step is 1", () => {
        expect(createRange(2, 5)).toEqual([2, 3, 4, 5]);
    });
})

