const add = (a, b) => {
  if (a === null || b === null) return null
  if (a === undefined || b === undefined) return undefined
  if (typeof a === 'string' || typeof b === 'string') {
    a = +a
    b = +b
  }

  return a + b
}

module.exports = add
