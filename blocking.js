const crypto = require('crypto');
const { error } = require('console');
console.log('Hello world');

var a = 93283;
var b=98340

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("key is genereated")
})

function multiplyFn(a, b){
  const res = a*b;
  return res
}

var c = multiplyFn(a, b);

console.log('multiply of a, b is: ', c)