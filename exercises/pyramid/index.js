// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'      //max col length = 1
                  //midpoint = 0
//   pyramid(2)
//                //max col length = 3
//       ' # '
//       '###'  //midpoint = 1
//   pyramid(3)
//         01234  //max col length = 5
//       0'  #  '
//       1' ### '
//       2'#####'  //midpoint = 2

//   pyramid(4)
//         0123456  //max col length = 7
//       0'   #   '  
//       1'  ###  ' col < midpoint - row (3 - 1 = 2) || col > midpoint + row (3 + 1 = 4)
//       2' ##### '
//       3'#######' //midpoint = 3

// function pyramid(n) {
//   const midpoint = n - 1;

//   for (row = 0; row < n; row++) {
//     let level = '';

//     for (col = 0; col < n * 2 - 1; col++) {
//       if (col < midpoint - row|| col > midpoint + row) {
//         level += ' ';
//       } else {
//         level += '#';
//       }
//     }

//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = '') {
  const midpoint = n -1; 
  
  if (row === n) {
    return;
  }

  if (level.length === n * 2 - 1) {
    console.log(level); 
    return pyramid(n, row + 1)
  }
                        
  if (level.length >= midpoint - row && level.length <= midpoint + row) {
    level += '#';
  } else {
    level += ' ';
  }
  return pyramid(n, row, level);
}

// function pyramid(n, row = 0, level = '') {
//   //base case; if row === n, stop calling pyramid function
//   if (n === row) {
//     return;
//   }

//   //detect when we are at end of a level 
//   // max length of column: n * 2 - 1
//   if (level.length === n * 2 - 1) {
//     console.log(level);

//     //need to add return keyword to make sure nothing else is down in this function
//     return pyramid(n, row + 1);
//   }

//   //decide whether or not to add #/space to level string
//   // const midpointIndex = n - 1;
//   const midpointIndex = Math.floor((2 * n - 1) / 2);
//   //add => contains char that we will add to level string
//   // let add;
//   //level.length corresponds to column we are operating on
//   if (midpointIndex - row <= level.length && midpointIndex + row >= level.length) {
//     level += '#';
//   } else {
//     level += ' ';
//   }
//   pyramid(n, row, level);
// }

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