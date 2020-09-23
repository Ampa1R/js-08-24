const mul = (a, b) => {
  if (a === null || b === null) return null
  if (a === undefined || b === undefined) return undefined

  return a * b
}

module.exports = mul
