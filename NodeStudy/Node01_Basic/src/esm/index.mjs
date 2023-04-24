// 1. method 01
// import m from './module.mjs'
// console.log(m)


// 2. method 02
// import { foo, bar } from './module.mjs'

// foo()
// console.log(bar)

// 3. method 03
import * as m from "./module.mjs";

console.log(typeof m)
console.log(Object.keys(m))
m.foo()
console.log(m.bar)


import md5 from "md5";

const before = 'Hello World'
const after = md5(before)
console.log({ before, after })