

window.onload = function() {
    var box = document.getElementById("box");

    var position = 0;

    var questions = [
        'Should you should date him? <br><em>Press \'yes\' to continue!</em>',
        'Is he *KIND*?',
        'Is he *available* (not currently in a relationship or otherwise legally/emotionally committed to someone else)?',
        'Does he have a job (or is in school or another training program)?',
        'Does he make you laugh?',
    ];

    document.getElementById("yes").onclick = function() {
        position++;
        document.getElementById('questions')
        .innerHTML = questions[position];
        box.style.backgroundImage = 'url("img/yes.jpg")';
    };

    document.getElementById("no").onclick = function() {
        document.getElementById('questions')
        .innerHTML = "THANK U, NEXT!";
        box.style.backgroundImage = 'url("img/nope.jpg")';


    };

    // document.getElementById("box").onmouseleave = function() {
    //     box.style.backgroundImage = 'url("img/other.jpg")';
    // };

    document.getElementById('questions')
        .innerHTML = questions[position];

};



