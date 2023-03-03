const {add, subtract, multiply, divide, squareRoot, max} = require("./math")

describe("Testing the math module", () => {

    test("should add two numbers together", () => {
        expect(add(4,2)).toBe(6);
    });

    test("should subtract two number", () => {
        expect(subtract(4,2)).toBe(2);
    });

    test("should multiply two numbers", () => {
        expect(multiply(4,2)).toBe(8);
    });

    test("should divide two numbers", () => {
        expect(divide(4,2)).toBe(2);
    });

    test("should find the square root of the number", () => {
        expect(squareRoot(4)).toBe(2)
    });

    test("should return the larger of the numbers", () => {
        expect(max(4,2)).toBe(4);
    });
});