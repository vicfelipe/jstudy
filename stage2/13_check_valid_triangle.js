class Situation {
    checkValidTriangle(t1, t2, t3) {
        return t1 + t3 <= t2 || t2 + t3 <= t1 || t1 + t2 <= t3 ? false : true
    }
}

const sit = new Situation();
console.log(sit.checkValidTriangle(1, 10, 12))