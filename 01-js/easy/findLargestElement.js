/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length === 0) return undefined
    let max_num=numbers[0]
    for(let i=1; i<numbers.length; i++) {
        //console.log(number)       
       if(numbers[i]>max_num){
        max_num=numbers[i]
       }       
    }
    return max_num
}
console.log(findLargestElement([-5, -10, -2, -8]));

module.exports = findLargestElement;