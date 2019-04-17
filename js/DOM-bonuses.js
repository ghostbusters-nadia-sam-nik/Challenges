"use strict";

// BONUS 1 (grocery list APP)
// Allow the user to enter a certain number of items and then display them on the page.
// - for each item, prompt the user for the name of the item, and store in an array of items.
// - for each item in the array of items create a new li element with the correct text and append to the DOM
// - for a simpler alternative, build an entire HTML string and set the innerHTML of an existing <ul> element


// var newListItem = document.getElementById('4');
//
// var changeInstructor = function(event){
//     var groceryItem = document.getElementById('4');
//     new.innerText = newInstructor.value;
// };
//
// var addItem = document.getElementById('add');
// addItem.addEventListener('click', changeInstructor, false);



let banana = document.querySelector("img");
let angle = Math.PI / 2;
function animate(time, lastTime) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }
    banana.style.top = (Math.sin(angle) * 20) + "px";
    banana.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);




//
// BONUS 2 (custom styling)
// In the same dom-bonuses.html page, allow the user to select custom styling for the page by
// setting the background color, font color, and font-family for the page. Add additional style changes to
// have fun and experiment!


// document.body.style.backgroundColor = "red";



document.getElementById("myP").style.fontWeight = "900";

document.getElementById("myP").style.letterSpacing = "15px";


// var
//
// var listener = function (event) {
//
// };
//
// // register the listener to handle clicks on btn1
// document.getElementById('btn1').addEventListener('click', listener, false);







//
//     BONUS 3 (profile create form)
// Create a form that will allow the user to enter the following information in text inputs:
//     firstName
// lastName
// username
// email
// address
// age
// shortBio
// Create a function, createUserProfileDiv() that when run will grab all data in the form inputs and build a
// div with the user's entered information and append it to the page. Test it by running it in the JS console.