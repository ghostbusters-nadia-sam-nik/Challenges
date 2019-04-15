"use strict";


<!--BONUS 1: Build a Jack-In-The-Box-->
<!--Define an object called jackBox.-->

var lyrics = ["All a-...", "-round the ...", "mulberry...", "bush, The...", "monkey...", "chased the...", "wea-...",
    "-sel...", "The monkey...", "stopped to...", "pull up his...", "sock,...", "Pop!...", "goes the...", "wea-...",
    "-sel."];

var jackBox = {

    triggered : false,
    intervalId : null,

    play() {
        if (jackBox.triggered === false) {
            for (var i = 0; i < lyrics.length; i++) {
                console.log(lyrics);
            }

            var count = 0;
            var max = 10;
            var interval = 1000;

            var intervalId = setInterval(function () {
                if (count >= max) {
                    clearInterval(intervalId);
                    jackBox.triggered = true;
                    alert("Pop!");
                }
            }, interval);
        }

        windUp() {
            clearInterval(intervalId);
            jackBox.triggered = true;
        }

    },





};

<!--Include properties for...-->
<!--triggered - whether or not the box has been sprung (should be false by default)-->
<!--intervalId - set to null-->
<!--play() - once called, if triggered is false, console.log one new element in the lyrics array every second-->
<!--after the lyrics, stop the interval, set the triggered property to true, and alert POP!-->
<!--windUp() - once called will stop the play() method and set triggered to false-->
<!--lyrics - an array with the following elements:-->
<!--"All a-...",-->
<!--"-round the ...",-->
<!--"mulberry...",-->
<!--"bush, The...",-->
<!--"monkey...",-->
<!--"chased the...",-->
<!--"wea-...",-->
<!--"-sel...",-->
<!--"The monkey...",-->
<!--"stopped to...",-->
<!--"pull up his...",-->
<!--"sock,...",-->
<!--"Pop!...",-->
<!--"goes the...",-->
<!--"wea-...",-->
<!--"-sel."-->
<!--Include methods for...-->
