console.log("sum module executed")

var x='Hello sum'

function calculateSum(a, b){
  const sum = a+ b
  console.log(sum)
}

module.exports = {calculateSum, x}
