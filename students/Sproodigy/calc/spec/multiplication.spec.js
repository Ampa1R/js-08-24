const mul = require('../public/js/multiplication');

describe('Функция mul()', () => {
  it('должна возвращать 9 при аргументах (3, 3)', () => {
    expect(mul(3, 3)).toBe(9);
  });

  it('должна возвращать null при аргументах (null, 2)', () => {
    expect(mul(null, 2)).toBeNull();
  })

  it('должна возвращать undefined при аргументах (undefined, 4)', () => {
    expect(mul(undefined, 4)).toBeUndefined()
  })

  it('должна возвращать 100 при аргументах ("10", "10")', () => {
    expect(mul("10", "10")).toBe(100);
  })
});
