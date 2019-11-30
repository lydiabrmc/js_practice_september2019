const {
    sumMultiples,
    isValidDNA
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("This function will receive an array of numbers and should return the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([9, 3, 15, 30, 1, 7])).toBe(57);
    });
});

describe("isValidDNA", () => {
    test("This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
        expect(isValidDNA("CGTA")).toBe(true);
    });

    test("This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
        expect(isValidDNA("CEGAT")).toBe(false);
    });
});   