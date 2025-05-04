/**
 * Reverse Digits
 * Write a program to reverse digits of a number
 * 
 * Input: n = 122
 * Output: 221
 * Explanation: By reversing the digits of number, number will change into 221.
 *
 * @class Situation
 */
class Situation {
    reverseDigits(n) {
        let value = ""+n
        return parseInt(value[2]+value[1]+value[0])
    }
}

const sit = new Situation();
console.log(sit.reverseDigits(624))