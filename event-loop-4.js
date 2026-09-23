const fs = require('fs')
const a = 100;

setImmediate(() =>  console.log("setImmediate"))

Promise.resolve("Promise").then( console.log)

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => console.log("2nd time expired"), 0);
  process.nextTick(() => console.log('2nd nextTick'))
  setImmediate(() =>  console.log("2nd setImmediate"))
  console.log("File reading CB")
})

setTimeout(() => console.log("time expired"), 0);

process.nextTick(() => {
  process.nextTick(() => console.log('inner nextTick'))
    setImmediate(() =>  console.log("inner setImmediate"))
  console.log('nextTick')})

function printA(){
  console.log("a = ", a)
}

printA()
console.log("last line of the code/file")