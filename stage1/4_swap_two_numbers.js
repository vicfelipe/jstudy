/** 
 * Swap Two Numbers
 * Given two numbers a and b, the task is to swap them.
 * 
 * Input: a = 2, b = 3
 * Output: a = 3, b = 2
 * Input: a = 20, b = 0
 * Output: a = 0, b = 20
 * Input: a = 10, b = 10
 * Output: a = 10, b = 10 
 * 
 */
let a = 3, b = 4, temp = 0

console.log("Input: a = " + a + ", b = " + b +"\n")
temp = b
b = a
a = temp

console.log("Swap Result")
console.log("Output: a = " + a + ", b = " + b)