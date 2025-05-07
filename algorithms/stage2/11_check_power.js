/**
 * Check if a number is a power of another number
 * Given two positive numbers x and y, check if y is a power of x or not.
 * 
 * Examples: 
 * Input:  x = 10, y = 1
 * Output: True
 * x^0 = 1
 * 
 * Input:  x = 10, y = 1000
 * Output: True
 * x^3 = 1000
 * 
 * Input:  x = 10, y = 1001
 * Output: False
 *
 * @class Situation
 */
class Situation {
    isPower(x,y) {
        if (x < 0 || y < 0) {
            return false
        }

        if (y === 1) {
            return true
        }
        
        let power = 1
        do {
            power *= x
        } while (power < y);
        return power === y
        
    }
}

const sit = new Situation();
const x = 2, y = 64

console.log(" The number "+ y + " is power of the number "+ x +" ? A = "+ sit.isPower(x,y))