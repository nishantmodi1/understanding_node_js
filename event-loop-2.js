const fs = require('fs')
const a = 100;

setImmediate(() =>  console.log("setImmediate"))

Promise.resolve("Promise").then( console.log)

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File reading CB")
})

setTimeout(() => console.log("time expired"), 0);

process.nextTick(() => console.log('nextTick'))

function printA(){
  console.log("a = ", a)
}

printA()
console.log("last line of the code/file")