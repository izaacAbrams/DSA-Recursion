const triangleNumber = function(num) {
  if(num <= 1) {
    return num
  }
  return num + triangleNumber(num - 1)
}

console.log(triangleNumber(4))
