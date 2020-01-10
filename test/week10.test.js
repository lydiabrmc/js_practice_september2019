const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("This function takes object numbers and returns the sum of all its digits", () => {
        expect(sumDigits((1, 2, 3))).toBe(6);
    });
})

describe("createRange", () => {
    test("returns array of numbers in succession from start to end by adding step", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    });
    test("if no step defined. Step is 1", () => {
        expect(createRange(2, 5)).toEqual([2, 3, 4, 5]);
    });
})

describe("getScreentimeAlertList", () => {
    test("The function returns an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
        const array = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ]
        expect(getScreentimeAlertList(array, "2019-05-02")).toEqual(["beth_1234"]);
    });
})
describe.only("hexToRGB", () => {
    test("Returns RGB of Hex recieved", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    });
    // test("add text test", () => {
    //     expect(hexToRGB()).toBe();
    // });
})

describe.only("findWinner", () => {
    test("Returns winner of game", () => {
        const array = [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ]
        expect(findWinner(array)).toBe("X");
    });
})


