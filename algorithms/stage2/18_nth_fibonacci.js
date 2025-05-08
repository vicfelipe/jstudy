/**
 * Nth Fibonacci Number
 *
 * Given a positive integer n, the task is to find the nth Fibonacci number.
 * 
 * Input: n = 2
 * Output: 1 
 * Explanation: 1 is the 2nd number of Fibonacci series.
 * 
 * Input: n = 5
 * Output: 5
 * Explanation: 5 is the 5th number of Fibonacci series.
 * 
 * @class Situation
 */
class Situation {
    findNthFibonacci(n) {
        if (n <= 1) {
            return n
        } else {          
            return  this.findNthFibonacci(n - 1) + this.findNthFibonacci(n - 2)
        }
    }
}

const sit = new Situation();
console.log(sit.findNthFibonacci(2));
