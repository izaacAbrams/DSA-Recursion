const countSheep = function(num) {
  if(num === 0) {
    return 'All sheep jumped over the fence'
  }
  return num + ' Another sheep jumps over the fence\n'+ countSheep(num - 1)
}

console.log(countSheep(3))


//What is the input to the program? - The number
//What is the output of the program? - A string
//What is the input to each recursive call? The number
//What is the output of each recursive call? The number minus 1 plus a string
