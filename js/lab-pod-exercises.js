(function () {

"use strict";

// Exercise #1
//
// Write a function addTo that accepts a number as a parameter and
// adds all natural numbers smaller or equal than the parameter. The
// result is to be returned. addTo(3) should return 1+2+3 = 6.


var addTo = function(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
};


// Exercise # 2

// Write a function factorial that calculates the factorial of a positive integer.
// factorial(3) should return 6.



var factorial = function(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
};


// Exercise # 3

// In the game of golf each hole has a par meaning the average number of strokes a golfer is
// expected to make in order to sink the ball in a hole to complete the play. Depending on how
// far above or below par your strokes are, there is a different nickname.
//     Your function will be passed par and strokes arguments. Return the correct string according
// to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):


function golfScore(par, strokes) {
    if (strokes == 1){
        return "Hole-in-one!";

    } else if (strokes <= par - 2){
        return "Eagle";

    } else if (strokes == par - 1) {
        return "Birdie";

    } else if (strokes == par) {
        return "Par";

    } else if (strokes == par + 1) {
        return "Bogey";

    } else if (strokes == par + 2) {
        return "Double Bogey";

    } else {
        return "Go Home!";
    }
}

golfScore(5, 4);


// Exercise #3 from Planets Array Curriculum Exercise with BONUS

        var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
        // var planetsArray;

        /**
         * TODO:
         * Convert planetsString to an array, and save it in a variable named
         * planetsArray.
         * console.log planetsArray to check your work
         */

        console.log(planetsString);

        var planetsArray = planetsString.split('|');

        console.log(planetsArray);



        /**
         * TODO:
         * Create a string with <br> tags between each planet. console.log() your
         * results. Why might this be useful?
         *
         * BONUS:
         * Create another string that would display your planets in an undordered
         * list. You will need an opening AND closing <ul> tags around the entire
         * string, and <li> tags around each planet.
         */



            // var planetsReString = planetsArray.join('<br> ');
            //
            // console.log(planetsReString);




            // BONUS EXERCISE


        var planetsList = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";

        console.log(planetsList);




})();