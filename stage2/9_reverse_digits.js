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
        let newStr = ""
        for (let i = value.length-1; i >= 0; i--) {
            newStr += value[i]
        }
        return parseInt(newStr)
    }
}

const sit = new Situation();
console.log(sit.reverseDigits(1234567))