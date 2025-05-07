/**
 * Sum of Squares of Naturals
 * Program for Sum of squares of first n natural numbers
 * 
 * Input : n = 2
 * Output: 5
 * Explanation: 1^2+2^2 = 5
 * 
 * Input : n = 8
 * Output: 204
 * Explanation :  1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 + 7^2 + 8^2 = 204
 *
 * @class Situation
 */
class Situation {
    sumSquares(n){
        if (n < 0 ) {
            return 0
        } else {
            return n*n+this.sumSquares(n-1)
        }
    }
}
const sit = new Situation();
console.log(sit.sumSquares(3))