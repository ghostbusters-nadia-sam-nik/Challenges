

window.onload = function() {
    var box = document.getElementById("box");
    document.getElementById("yes").onclick = function() {
        box.style.backgroundImage = 'url("img/yes.jpg")';
    };
    document.getElementById("no").onclick = function() {
        // box.style.backgroundColor = "green";
        box.style.backgroundImage = 'url("img/nope.jpg")';
    }
};



var questions = [
    'Is he kind?',
    'Is he currently in a relationship or otherwise legally/emotionally committed to someone else?',
    'Does he have a job?',
];

var i = 0;  // the index of the current item to show

setInterval(function() {            // setInterval makes it run repeatedly
    document.getElementById('questions')
        .innerHTML = questions[i++];    // get the item and increment i to move to the next
    if (i == questions.length) i = 0;   // reset to first element if you've reached the end
}, 15000);




