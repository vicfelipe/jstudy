/**
 * Introduction to Primality Test and School Method
 * 
 * Given a positive integer, check if the number is prime or not. 
 * A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
 * Examples of the first few prime numbers are {2, 3, 5, …}
 *
 * Examples:
 * Input:  n = 11
 * Output: true
 * 
 * Input:  n = 15
 * Output: false
 * 
 * Input:  n = 1
 * Output: false 
 * 
 * @class Situation
 */
class Situation {
    _arr = []
    isPrime(n) {
        if (n < 1) {
            let j = this._arr.length
            return this._arr.filter(value => j % value === 0).length === 2
        } else {
            this._arr.push(n)
            return this.isPrime(n - 1)
        }
    }
}

const sit = new Situation();
const n = 15
console.log(sit.isPrime(n))