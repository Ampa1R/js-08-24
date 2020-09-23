const div = require('../public/js/division');

describe('Функция div()', () => {
  it('должна возвращать 9 при аргументах (27, 3)', () => {
    expect(div(27, 3)).toBe(9);
  });

  it('должна возвращать null при аргументах (null, 2)', () => {
    expect(div(null, 2)).toBeNull();
  })

  it('должна возвращать undefined при аргументах (undefined, 4)', () => {
    expect(div(undefined, 4)).toBeUndefined()
  })

  it('должна возвращать Infinity при аргументах (10, 0)', () => {
    expect(div(10, 0)).toBePositiveInfinity()
  })

  it('должна возвращать -Infinity при аргументах (-10, 0)', () => {
    expect(div(-10, 0)).toBeNegativeInfinity()
  })

  it('должна возвращать 1 при аргументах ("10", "10")', () => {
    expect(div("10", "10")).toBe(1);
  })
});
