import { exportAllDeclaration } from "@babel/types"

describe("sumMultiples", () => {
    test("This function will receive an array of numbers and should return the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([9, 3, 15, 30, 1, 7])).toBe(57);
    });
});