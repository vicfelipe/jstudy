/**
 * Find n-th term of series 1, 3, 6, 10, 15, 21…
 * 
 * Given a number n, find the n-th term in the series 1, 3, 6, 10, 15, 21…
 * 
 * Input  3
 * Output 6
 * 
 * Input  4
 * Output  10
 *
 * @class Situation
 */
class Situation {
    findNthTerm(n) {
        if (n < 1) {
            return 0
        } else {
            return this.findNthTerm(n - 1) + n
        }
    }
}

const sit = new Situation();
console.log(sit.findNthTerm(3));
