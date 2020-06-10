const powerCalculator = function(num, exp) {
  if(exp <= 0) {
    return 'exponent should be >= 0'
  }
  else if (exp === 1) {
    return num
  }
  return num * powerCalculator(num, (exp - 1))
}

console.log(powerCalculator(10, 2))

//What is the input to the program? - 2 numbers, base and exponent
//What is the output of the program? the solution to base and exponent
//What is the input to each recursive call? number and exponent minus one
//What is the output of each recursive call? the number multiplied by itself and minus an exponent
