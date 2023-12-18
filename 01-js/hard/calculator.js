/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(input) {
    this.result += parseFloat(input);
  }

  subtract(input) {
    this.result -= parseFloat(input);
  }

  multiply(input) {
    this.result *= parseFloat(input);
  }

  divide(input) {
    const parsedInput =(input);
    if (parsedInput !== 0) {
      this.result /= parsedInput;
    } else {
      throw new Error('Invalid');
    }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(input) {
    const cleanInput = input.trim().replace(/\s+/g, "");
    const isValidInput = /^[0-9+\-*/().]+$/.test(cleanInput);

    if (!isValidInput) {
      throw new Error("Invalid input");
    }
   
    this.result = eval(cleanInput);
    if(this.result==Infinity)throw new Error("Invalid result");
    return this.result;
  }
}

// Example usage:
const calculator = new Calculator();

calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calculator.getResult()); // Output: 24


module.exports = Calculator;
