const { foo: foo2, bar } = require('./module.cjs')

const foo = 1
console.log(foo)

foo2()

console.log(bar)