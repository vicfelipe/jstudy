/**
 * Check if a number is even or odd
 *
 * @class Situation
 */
class Situation {
    isEven(n) {
        return n % 2 === 0 ? true : false
    }
}

const sit = new Situation();
console.log(sit.isEven(2))