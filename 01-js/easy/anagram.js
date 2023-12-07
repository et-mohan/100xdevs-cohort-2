/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   console.log(str1);
   str1=str1.toLowerCase().split('').sort();
   str2=str2.toLowerCase().split('').sort();   
   if(str1.join()==str2.join()) return true;
   return false;
}
result=isAnagram("abc!", "!Bac")
console.log(result)
module.exports = isAnagram;
