// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //match takes in regular expression that checks to see if what's passed in as arg matches str
  //returns arr of all matches found, if str has any char included between []
  //if no match found, will return null
  //2 options added to regex: g-> makes sure we don't stop at first match we find inside str; i-> "case insensitive"
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;


// function vowels(str) {
//   //iterative solution
//   //counter value with default value of 0, increment if come across vowel
//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     ['a', 'e', 'i', 'o', 'u'].includes(char) ? count++ : 0;
//   }

//   return count;
// }