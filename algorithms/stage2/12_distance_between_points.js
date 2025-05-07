/**
 * Calculate distance between two points
 * 
 * Program to calculate distance between two points.
 * 
 * Input : x1, y1 = (3, 4)
 * x2, y2 = (7, 7)
 * Output : 5
 * 
 * Input : x1, y1 = (3, 4) 
 * x2, y2 = (4, 3)
 * Output : 1.41421
 *
 * @class Situation
 */
class Situation {
    distanceBetweenTwoPoints(x1,x2,y1,y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    }
}

const sit = new Situation();
console.log(sit.distanceBetweenTwoPoints(3,7,4,7))