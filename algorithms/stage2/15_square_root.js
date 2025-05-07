class Situacao {
    findSquareRoot(n) {
        return Math.floor(Math.sqrt(n))
    }
    //Binary Search
    findSquareRoot2(n) {
        let low = 1
        let high = n
        let res = 1

        while (low <= high) {
            let mid = Math.floor( (low + high) / 2)
            if ( mid * mid > n) {
                high = mid - 1
            }  else {
                res = mid
                low = mid + 1
            }
        }
        return res
    }
}

const sit = new Situacao();

console.log(sit.findSquareRoot2(100));
