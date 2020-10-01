const script      = require('../src/module');

const multiply    = script.multiply;
const division    = script.division;
const addition    = script.addition;
const subtraction = script.subtraction;

describe('function "multiply()"', () => {
    it('Должна возвращать 9 при аргументах (3, 3)', () => {
        expect(multiply(3, 3)).toBe(9);
    });

    it('Должна возвращать "Введите число" при аргументах (null, 3)', () => {
        expect(multiply(null, 3)).toBe('Введите число');
    });

    it('Должна возвращать "Введите число" при аргументах (undefined, 3)', () => {
        expect(multiply(undefined, 3)).toBe('Введите число');
    });

    it('Должна возвращать "Введите число" при аргументах ("txt", 3)', () => {
        expect(multiply("txt", 3)).toBe('Введите число');
    });

    it('Должна возвращать "Введите число" при аргументах (NaN, 3)', () => {
        expect(multiply(NaN, 3)).toBe('Введите число');
    });

    it('Должна возвращать "Введите число" при аргументах (" ", 5)', () => {
        expect(multiply(" ", 5)).toBe('Введите число');
    });
});

describe('function "division()"', () => {
    it('Должна возвращать 2 при аргументах (10, 5)', () => {
        expect(division(10, 5)).toBe(2);
    });

    it('Должна возвращать "Введите число" при аргументах (null, 3)', () => {
        expect(division(null, 3)).toBe('Введите число');   
    });

    it('Должна возвращать "Введите число" при аргументах (undefined, 3)', () => {
        expect(division(undefined, 3)).toBe('Введите число');
    });

    it('Должна возвращать "Введите число" при аргументах ("txt", 3)', () => {
        expect(division("txt", 3)).toBe('Введите число');
    });

    it('Должна возвращать "Введите число" при аргументах (NaN, 3)', () => {
        expect(division(NaN, 3)).toBe('Введите число');
    });

    it('Должна возвращать  "Введите число" при аргументах (" ", 5)', () => {
        expect(division(" ", 5)).toBe('Введите число');
    });
});

describe('function "addition()"', () => {
    it('Должна возвращать 15 при аргументах (10, 5)', () => {
        expect(addition(100, 5)).toBe(105);
    });

    it('Должна возвращать "Введите число" при аргументах (null, 3)', () => {
        expect(addition(null, 3)).toBe('Введите число');
    });

    it('Должна возвращать "Введите число" при аргументах (undefined, 3)', () => {
        expect(addition(undefined, 3)).toBe('Введите число');
    });

    it('Должна возвращать "Введите число" при аргументах ("txt", 3)', () => {
        expect(addition("txt", 3)).toBe('Введите число');
    });

    it('Должна возвращать "Введите число" при аргументах (NaN, 3)', () => {
        expect(addition(NaN, 3)).toBe('Введите число');
    });

    it('Должна возвращать  "Введите число" при аргументах (" ", 5)', () => {
        expect(addition(" ", 5)).toBe('Введите число');
    });
});

describe('function "subtraction()"', () => {
    it('Должна возвращать -5 при аргументах (5, 10)', () => {
        expect(subtraction(5, 10)).toBe(-5);
    });

    it('Должна возвращать "Введите число" при аргументах (null, 3)', () => {
        expect(subtraction(null, 3)).toBe('Введите число');
    });

    it('Должна возвращать "Введите число" при аргументах (undefined, 3)', () => {
        expect(subtraction(undefined, 3)).toBe('Введите число');
    });

    it('Должна возвращать "Введите число" при аргументах ("txt", 3)', () => {
        expect(subtraction("txt", 3)).toBe('Введите число');
    });

    it('Должна возвращать "Введите число" при аргументах (NaN, 3)', () => {
        expect(subtraction(NaN, 3)).toBe('Введите число');
    });

    it('Должна возвращать  "Введите число" при аргументах (" ", 5)', () => {
        expect(subtraction(" ", 5)).toBe('Введите число');
    });
});