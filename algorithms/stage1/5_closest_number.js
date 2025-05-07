/**
 * Closest Number
 * Find the number closest to n and divisible by m
 * 
 * Given two integers n and m (m != 0). Find the number closest to n and divisible by m. 
 * If there is more than one such number, then output the one having maximum absolute value.
 * 
 * Example:
 * Input: n = 13, m = 4
 * Output: 12
 * Explanation: 12 is the closest to 13, divisible by 4.
 *
 * @class Situation
 */
class Situation {
    findClosest(v,d) {
        if (v % d == 0) {
            return v
        } else {
            return this.findClosest(v-1, d)
        }
    }
}

const sit = new Situation(), valueToFind = 19, divisor = 4;
let closest = sit.findClosest(valueToFind,divisor)
console.log("Output: "+closest)
console.log("Explanation: "+ closest +" is the closest to "+ valueToFind +", divisible by "+divisor)