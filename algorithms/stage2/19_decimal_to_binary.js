/**
 * Program for Decimal to Binary Conversion
 *
 * Given a decimal number n, the task is to convert the given decimal number into an equivalent binary number.
 * 
 * Input: n = 12
 * Output: “1100”
 * 
 * Input: n = 17
 * Output: “10001”
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