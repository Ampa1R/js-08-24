const subtr = require('../public/js/subtraction');

describe('Функция subtr()', () => {
  it('должна возвращать 9 при аргументах (14, 5)', () => {
    expect(subtr(14, 5)).toBe(9);
  });

  it('должна возвращать null при аргументах (null, 2)', () => {
    expect(subtr(null, 2)).toBeNull();
  })

  it('должна возвращать undefined при аргументах (undefined, 4)', () => {
    expect(subtr(undefined, 4)).toBeUndefined()
  })

  it('должна возвращать 0 при аргументах ("10", "10")', () => {
    expect(subtr("10", "10")).toBe(0);
  })
});
