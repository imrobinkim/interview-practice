// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


//default value of 0 for row b/c you're starting recursion at 
//first row (same with line to console log)
function steps(n, row = 0, stair = '') {
  //recursive solution 
  //First, identify base case - where to stop recursive process (i.e. 1 or 0) otherwise stuck in infinite recursion
  if (n === row) {
    return;
  }

  //Second, do some work (i.e. console log current num)
  if (n === stair.length) {
    console.log(stair);
    //Last, call func again, making sure argument was changed
    return steps(n, row + 1);
  } 

  const add = stair.length <= row? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;


// function steps(n) {
//   //iterative solution
//   for (let row = 0; row < n; row++) {
//     let line = '';

//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         line += '#';
//       } else {
//         line += ' ';
//       }
//     }
//     console.log(line);
//   }
// }
