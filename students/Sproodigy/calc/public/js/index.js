const add = require('./addition')
const subtr = require('./subtraction')
const mul = require('./multiplication')
const div = require('./division')

const a = document.querySelectorAll('.calc__operand')[0].value
const b = document.querySelectorAll('.calc__operand')[1].value

window.add = add
window.subtr = subtr
window.mul = mul
window.div = div
