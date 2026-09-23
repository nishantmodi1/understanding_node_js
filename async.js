const fs =  require('fs')
const https = require("https")

console.log('Hello world');

var a = 93283;
var b=98340

//synchronous funtion
fs.readFileSync('./file.txt', "utf-8");


https.get("https://dummyjson.com/products/1", (res) => {
  console.log('Fetch data successfully');
})

setTimeout(() => {
  console.log("this run after 5 second");
}, 5000)

// asynchronous function
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File data : ", data)
})

function multiplyFn(a, b){
  const res = a*b;
  return res
}

var c = multiplyFn(a, b);

console.log('multiply of a, b is: ', c)