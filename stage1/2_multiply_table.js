/**
 * multiplyTable output a multiply table with two arguments
 * v is value will be multiplied
 * n is the counter
 *
 * @class TableNumbers
 */
class TableNumbers {
    multiplyTable(v,n) {
        if (n < 0) {
            return 0
        } else {
            this.multiplyTable(v, n-1)
            console.log(v + " * " + n + " = "+ v*n)
        }
    }
        
}

const table = new TableNumbers();
table.multiplyTable(9,10)