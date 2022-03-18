const factorial = (number) => { 
  if (number === 1) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(5));


/**
 * Consider the factorial of the number
 * @param {number} x Number
 * @returns {number} Result
 */
function fact(x) {
  if (x === 0) return 1;
  return x * fact(x - 1);
}

console.log(fact(5));