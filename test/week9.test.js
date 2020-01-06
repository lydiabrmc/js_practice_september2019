const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("This function will receive an array of numbers and should return the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([9, 3, 15, 30, 1, 7])).toBe(57);
    });
})

describe("isValidDNA", () => {
    test("returns true or false depending if valid string", () => {
        expect(isValidDNA("CGTA")).toBe(true);
    });
    test("returns true regardless of capitalisation", () => {
        expect(isValidDNA("cGTacC")).toBe(true);
    });

});

describe.only("getComplementaryDNA", () => {
    test("This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of 'ACTG' would have a complementary DNA string of 'TGAC'.", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });
    test("input invalid", () => {
        expect(isValidDNA("ACTGB")).toBe(false);
    });
    test("returns true regardless of capitalisation", () => {
        expect(isValidDNA("cGTacC")).toBe(true);
    });
});

describe("isItPrime", () => {
    test("returns true if divisible by 1 and itself", () => {
        expect(isItPrime(7)).toBe(true);
    });
    test("This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)", () => {
        expect(isItPrime(6)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("This function should receive a number and return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays. For example, given parameters 3 and 'foo' the resulting matrix should be:[['foo', 'foo', 'foo'],['foo', 'foo', 'foo'], ['foo', 'foo', 'foo']]", () => {
        expect(createMatrix(3, "foo")).toEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
    });
});

describe.only("areWeCovered", () => {
    test("returns false when no staff", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });
    test("Returns false when less than 3 people in", () => {
        const staff = [
            { name: "Lizzie", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Rob", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Steven", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Andy", rota: ["Monday", "Tuesday", "Wednesday"] }
        ]
        expect(areWeCovered(staff, "Friday")).toBe(false);
    })
    test("returns true when there are 3 members of staff", () => {
        const staff = [
            { name: "Lizzie", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Rob", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Steven", rota: ["Monday", "Tuesday", "Wednesday"] }
        ]
        expect(areWeCovered(staff, "Monday")).toBe(true);
    });
})