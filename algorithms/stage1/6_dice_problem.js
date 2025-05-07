/**
 * The dice problem
 * You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. 
 * The numbers are in the range of 1 to 6, like any ordinary dice. 
 * You will be provided with a face of this cube, your task is to guess the number on the opposite face of the cube.
 * 
 * Example:
 * Input: n = 2
 * Output: 5
 * Explanation: For dice facing number 5 opposite face will have the number 2.
 * 
 * @class Situation
 */
class Situation {
    solveDice(n) {
        const invertedFaces = {
            1:6,
            2:5,
            3:4,
            4:3,
            5:2,
            6:1
        }

        return invertedFaces[n]
    }
}

const sit = new Situation();
const faceToFind = 2
let oppositeFace = sit.solveDice(faceToFind)
console.log("For dice facing number "+ faceToFind +" opposite face will have the number "+ oppositeFace)
