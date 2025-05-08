/**
 * Perfect Number
 * A number is a perfect number if is equal to the sum of its proper divisors, 
 * that is, the sum of its positive divisors excluding the number itself. 
 * The task is to find whether a given positive integer n is perfect or not.
 * 
 * Input: n = 15
 * Output: false
 * Divisors of 15 are 1, 3 and 5. Sum of divisors is 9 which is not equal to 15.
 * 
 * Input: n = 6
 * Output: true
 * Divisors of 6 are 1, 2 and 3. Sum of divisors is 6.
 *
 * @class Situation
 */
class Situation {
    isPerfectNumber(n) {
        let res = 0
        for (let i = 0; i < n; i++) {
            if (n % i === 0) {
                res += i
            }
        }
        return res === n
    }
}

const sit = new Situation();
console.log(sit.isPerfectNumber(15));
