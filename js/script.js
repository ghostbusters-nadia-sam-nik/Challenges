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


///////// Ojbjects Exercises //////////


Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var student = { 
name : "Name of Student", 
sclass : "VI", 
rollno : 12 };

var objsize = Object.objsize(student);
console.log('Size of the current object : '+objsize);


/// Search and Sort Exercise ///////

function flash_sort(arr) 
  {
    var max = 0, min = arr[0];
    var n = arr.length;
    var m = ~~(0.45 * n);
    var l = new Array(m);
 
    for (var i = 1; i < n; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > arr[max]) {
            max = i;
        }
    }
 
     if (min === arr[max]) {
        return arr;
    }
 
    var c1 = (m - 1) / (arr[max] - min);
 
 
    for (var k = 0; k < m; k++) {
        l[k] = 0;
    }
    for (var j = 0; j < n; ++j) {
        k = ~~(c1 * (arr[j] - min));
        ++l[k];
    }
 
    for (var p = 1; p < m; ++p) {
        l[p] = l[p] + l[p - 1];
    }
 
    var hold = arr[max];
    arr[max] = arr[0];
    arr[0] = hold;
 
    //permutation
    var move = 0, t, flash;
    j = 0; 
    k = m - 1;
  
    while (move < (n - 1)) {
        while (j > (l[k] - 1)) {
            ++j;
            k = ~~(c1 * (arr[j] - min));
        }
        if (k < 0) break;
        flash = arr[j];
        while (j !== l[k]) {
            k = ~~(c1 * (flash - min));
            hold = arr[t = --l[k]];
            arr[t] = flash;
            flash = hold;
            ++move;
        }
    }
 
    //insertion
    for (j = 1; j < n; j++) {
        hold = arr[j];
         i = j - 1;
        while (i >= 0 && arr[i] > hold) {
            arr[i + 1] = arr[i--];
        }
        arr[i + 1] = hold;
    }
    return arr;
}
var arra = [3, 0, 2, 5, -1, 4, 1]; 
console.log("Original Array Elements"); 
console.log(arra); 
console.log("Sorted Array Elements"); 
console.log(flash_sort(arra, 0, 5));



