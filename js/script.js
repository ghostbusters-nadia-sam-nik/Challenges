// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


// Challenge 1

var num = 1;
var isDivisible = false;
var startTime = (new Date().getTime());

while (!isDivisible) {
    for (var i = 20; i > 1; i--) {
        if (num % i !== 0) {
            isDivisible = false;
            num = num + (i + 1);
            break;
        }
        else {
            isDivisible = true;
        }
    }
}

console.log(num);
console.log("Finished in " + (((new Date().getTime()) - startTime) / 1000) + " seconds");

// Challenge 2

// Task
// Declare a constant variable, , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
//     1. Read a number, , denoting the radius of a circle from stdin.
//     2. Use  and  to calculate the  and  of a circle having radius .
//     3. Print  as the first line of output and print  as the second line of output.

function readLine(r) {

    const PI = Math.PI;
    var area = PI * Math.pow(r, 2);
    var perimeter = 2 * PI * r
    console.log(area);
    console.log(perimeter);
};





