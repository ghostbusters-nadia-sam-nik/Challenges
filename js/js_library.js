"use strict";

function isBoolean(input) {
    if (typeof input === "boolean"){
        return true
    }else{
        return false
    }
}
function isNumeric(input) {
    if (typeof input === "number"){
        return true
    }else if ( (parseInt(input) >= 0 || parseInt(input) < 0) === true){
        return true
    }else if (typeof input === "boolean"){
        return false
    }else{
        return false
    }
}
function isString(input) {
    if (typeof input === "string"){
        return true
    }else{
        return false
    }
}
function isArray(input) {
    if (Array.isArray(input) === true){
        return true
    }else{
        return false
    }
}
function isNegative(input) {
    if (input < 0){
        return true
    }else if (input >= 0){
        return false
    }else{
        return false
    }
}
function isPositive(input) {
    if (isNumeric(input) === true) {
        if (input > 0){
            return true
        }else if (input < 0){
            return false
        }else{
            return false
        }
    }else{
        return false
    }
}
function increment(input) {
    if (isNumeric(input) === true){
        return input + 1
    }else{
        return false
    }
}
function decrement(input) {
    if (isNumeric(input) === true){
        return input - 1
    }else{
        return false
    }
}
function square(input) {
    if (isNumeric(input) === true){
        return input * input
    }else{
        return false
    }
}
function upperCase(input) {
    if (isString(input) === true){
        if (isNumeric(input)=== true){
            return false
        }else{
            return input.toUpperCase()
        }
    }else{
        return false
    }

}
function reverse(input) {
    input = input.split("");
    input = input.reverse();
    input = input.join("");
    return input
}
function isPalindrome(input) {
    if (isString(input)){
        if (isNumeric(input)){
            return false
        }else{
            input = input.toLowerCase();
            if (input === reverse(input)){
                return true
            }else{
                return false
            }
        }
    }else{
        return false
    }
}

function getHighestNumber(num0,num1,num2) {
    if (isNumeric(num0) && isNumeric(num1) && isNumeric(num2) === true){
        return Math.max(num0, num1, num2)
    }else{
        return false
    }
}
function containsVowel(input) {
    if (isString(input) === true){
        if (input.includes("a") || input.includes("e") || input.includes("i") || input.includes("o") || input.includes("u")){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}
function add(num0,num1) {
    if (isNumeric(num0) && isNumeric(num1)){
        return parseInt(num0) + parseInt(num1)
    }else{
        return false
    }
}
function multiply(num0,num1) {
    if (isNumeric(num0) && isNumeric(num1)){
        return parseInt(num0) * parseInt(num1)
    }else{
        return false
    }
}
function sumOfSquares(num0,num1) {
    if (isNumeric(num0) && isNumeric(num1)){
        return (square(num0)) + (square(num1))
    }else{
        return false
    }
}
var berverages = [
    {name: "Budlight",
    type: "alcoholic",
    volumeInLiters: 117.35,
    priceInCents: .83,
    isOpen: true},
    {name: "CocaCola",
    tye: "Carbinated",
    volumeInLiters: 0.354882,
    priceInCents: 43,
    isOpen: false}];


var users = [
    {name: "Sam",
        age: 21},
    {name: "Cathy",
        age: 34},
    {name: "Karen",
        age: 43}
];
function usernames() {
    var namestring = "";
        for (var i = 0; i < users.length; i++) {
            namestring += users[i].name + " ";
        }
        console.log(namestring)
}
function johnDoe() {
    for (var i = 0; i < users.length; i++) {
        users[i].name = "John Doe"
    }
}
function addtoage(yearstoadd) {
    for (var i = 0; i < users.length; i++) {
        users[i].age += yearstoadd
    }
}

usernames();
johnDoe();
usernames();
addtoage(1);
console.log(users[1].age);

var dog = [{
    breed: "husky",
    weightInPounds: 13.23,
    age: 5,
    color: "white",
    sterilized: false}];
dog[0].bark = function () {console.log("Bow Wow!!")
};
dog[0].getOlder = function () {
    dog[0].age += 1;
    console.log("Your dog has aged by one year and is now " + dog[0].age + " years old.")
};
dog[0].fix = function(){
  if (dog[0].sterilized === false){
      dog[0].sterilized = true;
      console.log("Your dog is now fixed")
  }else{
      console.log("Your dog is already fixed")
  }
};
console.log(dog[0].age);


