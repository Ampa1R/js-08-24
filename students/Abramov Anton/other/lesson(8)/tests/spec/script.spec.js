const script = require('../script');

describe('Функция sum()', () => {
    it('должна возвращать 8 при аргументах (5, 3)', () => {
        let result = script.sum(5, 3);
        expect(result).toBe(8);
    });
    it('должна возвращать "Error" при аргументах (5, " ")', () => {
        let result = script.sum(5, " ");
        expect(result).toBe('Error');
    });
    it('должна возвращать "Error" при аргументах (5, null)', () => {
        let result = script.sum(5, null);
        expect(result).toBe('Error');
    });
    it('должна возвращать "Error" при аргументах (5, null)', () => {
        let result = script.sum(5, true);
        expect(result).toBe('Error');
    });
    it('должна возвращать "Error" при аргументах (5, Infinity)', () => {
        let result = script.sum(5, Infinity);
        expect(result).toBe('Error');
    });
    it('должна возвращать "Error" при аргументах (5, Infinity)', () => {
        let result = script.sum(5, -Infinity);
        expect(result).toBe('Error');
    });
});