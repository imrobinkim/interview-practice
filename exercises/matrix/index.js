// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],   startCol = 1 // endCol = 1
//     [8, 9, 4],    startRow = 2 // endRow = 1
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  for (i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  // debugger

  while (startCol <= endCol && startRow <= endRow) {
    for (i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }

    startRow++;
    // debugger

    for (i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }

    endCol--;
    // debugger

    for (i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }

    endRow--;
    // debugger

    for (i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }

    startCol++;
    // debugger
  } 

  return results;
}

matrix(3);


// function matrix(n) {
//   const results = [];

//   //# of subarrays in overall array determined by n
//   //initializing matrix or its skeleton to return, all empty at first
//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }

//   let counter = 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;

//   while (startColumn <= endColumn && startRow <= endRow) {
//     // for loop that's responsible for Top row
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;

//     // Right column
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;

//     //Bottom row
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;

//     // start column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//   }

//   return results;
// }

module.exports = matrix;
