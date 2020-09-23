const div = (a, b) => {
  if (a === null || b === null) return null
  if (a === undefined || b === undefined) return undefined
  if (a > 0 && b === 0) return Infinity
  if (a < 0 && b === 0) return -Infinity

  return a / b
}

module.exports = div
