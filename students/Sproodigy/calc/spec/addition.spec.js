const add = require('../public/js/addition');

describe('Функция add()', () => {
  it('должна возвращать 9 при аргументах (4, 5)', () => {
    expect(add(4, 5)).toBe(9);
  });

  it('должна возвращать null при аргументах (null, 2)', () => {
    expect(add(null, 2)).toBeNull();
  })

  it('должна возвращать undefined при аргументах (undefined, 4)', () => {
    expect(add(undefined, 4)).toBeUndefined()
  })

  it('должна возвращать 20 при аргументах ("10", "10")', () => {
    expect(add("10", "10")).toBe(20);
  })
});
