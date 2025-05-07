/**
 * Program to find sum of first n natural numbers
 * Given a number n, find the sum of the first n natural numbers.
 * 
 * Examples:
 * n = 3, then: 1 + 2 + 3 = 6
 * n = 5, then: 1 + 2 + 3 + 4 + 5 = 15
 * 
 * @class Situation
 */
class Situation {
    sumNaturals(n) {
        if (n < 1) {
            return 0
        } else {
            return this.sumNaturals(n-1) + n
        }
    }
}


const sit = new Situation();
console.log(sit.sumNaturals(3))