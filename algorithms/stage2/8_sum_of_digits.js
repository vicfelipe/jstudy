/**
 * Sum of Digits of a Number
 *
 * Given a number n, find the sum of its digits.
 * 
 * Input: n = 687
 * Output: 21
 * Explanation: The sum of its digits are: 6 + 8 + 7 = 21
 * 
 * @class Situation
 */
class Situation {
    sumDigits(n) {
        let value = ""+n
        return parseInt(value[0]) + parseInt(value[1]) + parseInt(value[2])
    }
}

const sit = new Situation();
console.log(sit.sumDigits(543))