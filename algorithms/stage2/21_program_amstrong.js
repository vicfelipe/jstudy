/**
 * Program for Armstrong Numbers
 * 
 * Given a number x, determine whether the given number is Armstrong’s number or not. 
 * A positive integer of n digits is called an Armstrong number of order n (order is the number of digits) if
 * abcd… = pow(a,n) + pow(b,n) + pow(c,n) + pow(d,n) + ….
 * 
 * Input:153
 * Output: Yes
 * Explanation: 153 is an Armstrong number, 1*1*1 + 5*5*5 + 3*3*3 = 153
 * 
 * Input: 120
 * Output: No
 * Explanation: 120 is not a Armstrong number, 1*1*1 + 2*2*2 + 0*0*0 = 9
 *
 * @class Situation
 */
class Situation {
    progAmstrong(n) {
        let numbers = n.toString().split("")
        let res = 0

        numbers.forEach(element => {
            let val = 1
            for (let i = 0; i < numbers.length; i++) {
                val *= element
            }
            res += val
        });

        return res === n
    }
}

const sit = new Situation();
console.log(sit.progAmstrong(120))