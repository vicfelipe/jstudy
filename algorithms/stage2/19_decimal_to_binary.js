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
    // decimalToBinary(n) {
    //     return n.toString(2);
    // }
    decimalToBinary2(n) {
        let i = n, res = n, binary = "", newStr = ""
        
        while (i > 1) {
            binary += Math.floor(i % 2).toString()
            res = i / 2
            i = res
        }

        for (let i = binary.length-1; i >= 0; i--) {
            newStr += binary[i]
        }

        return newStr
    }
}

const sit = new Situation();

// Two ways to convert Decimal to Binary
//console.log(sit.decimalToBinary(17));
console.log(sit.decimalToBinary2(12));