/**
 * Nth term of AP from First Two Terms
 *
 * Given two integers a1 and a2, the first and second terms of an Arithmetic Series respectively, 
 * the problem is to find the nth term of the series. 
 * 
 * Example:
 * Input : a1 = 2,  a2 = 3,  n = 4
 * Output : 5
 * Explanation : The series is 2, 3, 4, 5, 6, ....   , thus the 4th term is 5. 
 * 
 * @class Situation
 */
class Situation {
    _arr = []
    findTerm(a1, a2, n) {
        let diff = a2-a1
        if (n < 0) {
            return this._arr[this._arr.length-2]
        } else {
            this._arr.push(a1)
            console.log(this._arr)
            return this.findTerm(a1+diff, a2+diff, n-1)
        }
    }
}

const sit = new Situation();
const a1 = 1, a2 = 3, n = 10
const output = sit.findTerm(a1, a2, n)

console.log("The "+ n + " term is " + output)