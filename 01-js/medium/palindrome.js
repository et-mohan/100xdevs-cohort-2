/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  main_string=str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').join('');
  reverse_string=str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('');
  if(main_string==reverse_string){ return true;}
  return false;
}

module.exports = isPalindrome;
