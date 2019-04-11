"use strict";


// ================================= LOOPS AND ARRAY BONUSES

// 1. Create a function that returns a random day of the week

var daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getArrayRandomElement (arr) {
    if (arr && arr.length) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    // The undefined will be returned if the empty array was passed
}

var randomizedDays = getArrayRandomElement(daysArray);

console.log(randomizedDays);




// 2. Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// someFunction("a") // returns 1
// someFunction("z") // returns 26

var alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function getAlphabetIndex() {
    return alphabetArr.indexOf('a');
}

console.log(getAlphabetIndex());




// 3. Create a function that returns the longest string in a given array of string elements.



// 4. Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array are equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
//     var arr1 = ['bob', 1, true, 1, 2];
// var arr2 = [2, null, undefined, 0, 2, "apple"]
// exampleFunction(arr1, arr2) // returns true



// 5. Write a program to toggle the case for all characters in a string. Special characters will not change.
//     Example input: "aBc12#""
// Example output: "AbC12#"



// 6. Write a program that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
//     Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"




// 7. Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
//     1) add a student
// 2) delete a student
// 3) view all students in alphabetical order
// 4) view all students in reverse alphabetical



// 8. Example of creating a new string of names that have the last letter capitalized...
// var names = "Bob Sally Mary";
// var namesArr = names.split(" ");
// var newNameStr;
// var newNamesArr = [];
// namesArr.forEach(function(name) {
//     var newName = name.substring(0, name.length - 1) + name[name.length - 1].toUpperCase();
//     newNamesArr.push(newName);
// });
// newNameStr = newNamesArr.join(" ");
// console.log(newNameStr);