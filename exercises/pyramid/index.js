// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  //base case; if row === n, stop calling pyramid function
  if (n === row) {
    return;
  }

  //detect when we are at end of a level 
  // max length of column: n * 2 - 1
  if (level.length === n * 2 - 1) {
    console.log(level);

    //need to add return keyword to make sure nothing else is down in this function
    return pyramid(n, row + 1);
  }

  //decide whether or not to add #/space to level string
  // const midpointIndex = n - 1;
  const midpointIndex = Math.floor((2 * n - 1) / 2);
  //add => contains char that we will add to level string
  // let add;
  //level.length corresponds to column we are operating on
  if (midpointIndex - row <= level.length && midpointIndex + row >= level.length) {
    level += '#';
  } else {
    level += ' ';
  }
  pyramid(n, row, level);
}

module.exports = pyramid;


// function pyramid(n) {
//   //find midpoint index
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }