/**
 * Factorial of a Number
 * 
 * Given the number n (n >=0), find its factorial. Factorial of n is defined as 1 x 2 x … x n. For n = 0, factorial is 1
 * 
 * Examples:
 * Input: n = 5
 * Output: 120
 * Explanation: 5! = 5 * 4 * 3 * 2 * 1 = 120
 * 
 * @class Situacao
 */
class Situacao {
    factorizeNumber(n) {
        if (n < 1) {
            return 1
        } else {
            return this.factorizeNumber(n-1) * n
        }
    }
}

const sit = new Situacao();
console.log(sit.factorizeNumber(1))